document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromURL();  // URL에서 id 값을 가져옴

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

    loadProductOpinion();
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

async function loadProductOpinion() {
    try {
        const response = await fetch('data/products.json'); // JSON 파일 경로
        const products = await response.json();

        const productId = getProductIdFromURL(); // URL에서 id 값을 가져옴
        const product = products.find(p => p.id === parseInt(productId)); // 해당 id의 상품 찾기

        if (!product) {
            console.error('해당 상품을 찾을 수 없습니다.');
            return;
        }

        // 1. 상품 토론
        const discussionSection = document.querySelector('.discussion-section');
        product.opinions.forEach(opinion => {
            const article = document.createElement('article');
            article.classList.add('discussion-item');
            article.innerHTML = `
                <p>${opinion.content}</p>
                <small>
                    찬${opinion.upvotes}/반${opinion.downvotes}
                    <time datetime="${opinion.date}">${formatDate(opinion.date)}</time>
                    ${opinion.author}
                </small>
                <button type="button">반대</button>
                <button type="button">찬성</button>
                <button type="button">신고</button>
            `;
            discussionSection.appendChild(article);
        });

        // 2. 찬성을 많이 받은 의견
        const popularOpinions = document.querySelector('.popular-opinions');
        const sortedOpinions = product.opinions.slice().sort((a, b) => b.upvotes - a.upvotes); // 찬성 수 기준 내림차순 정렬

        sortedOpinions.forEach((opinion, index) => {
            const article = document.createElement('article');
            article.classList.add('popular-item');
            article.innerHTML = `
                <p>${opinion.content}</p>
                <small>
                    #${index + 1}/찬${opinion.upvotes}/반${opinion.downvotes}
                    <time datetime="${opinion.date}">${formatDate(opinion.date)}</time>
                    ${opinion.author}
                </small>
            `;
            popularOpinions.appendChild(article);
        });

    } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
    }
}