document.addEventListener('DOMContentLoaded', () => {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').outerHTML = data;
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').outerHTML = data;
        });

    // Load modal
    fetch('modal.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('dialog').outerHTML = data;
        });

    loadProductData();
});

// 날짜 포맷 함수
function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

// URL 파라미터에서 id 값을 가져오는 함수
function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return id = params.get('id') || 1;
}

// JSON에서 상품 ID로 특정 상품 불러오기
async function loadProductData() {
    try {
        const response = await fetch('data/products.json') //JSON 파일 경로
        const products = await response.json();

        const productId = getProductIdFromURL();  // URL에서 id 값을 가져옴
        const product = products.find(p => p.id === parseInt(productId)); // 해당 id의 상품 찾기

        if (!product) {
            console.error('해당 상품을 찾을 수 없습니다.');
            return;
        }

        // 1. 제품명 표시
        document.querySelector('figcaption h1').textContent = product.productName;

        // 2. 스펙 표시
        const dl = document.querySelector('figcaption dl');
        // dl.innerHTML = ''; //초기화 필요시 추가
        for (let [specName, specValue] of Object.entries(product.specs)) {
            const span = document.createElement('span');
            span.innerHTML = `<dt>${specName}:</dt> <dd>${specValue}</dd>`;
            dl.appendChild(span);
        }

        // 3. 상품 설명 표시
        document.querySelector('.product-description span').textContent = product.description;

        // 4. 의견 표시
        const opinionsSection = document.querySelector('.product-opinions');
        // opinionsSection.innerHTML = ''; //초기화 필요시 추가
        product.opinions.forEach(opinion => {
            const article = document.createElement('article');
            article.classList.add('opinion');
            article.innerHTML = `
                    <p>${opinion.content}</p>
                    <small class="opinion-meta">
                        작성자: ${opinion.author}
                        <time datetime="${opinion.date}">${formatDate(opinion.date)}</time>
                    </small>
                `;
            opinionsSection.appendChild(article);
        });
    } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
    }
}