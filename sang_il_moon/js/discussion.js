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

    fetch('data/products.json') // JSON 파일 경로
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === parseInt(productId)); // 해당 id의 상품 찾기

            if (!product) {
                console.error('해당 상품을 찾을 수 없습니다.');
                return;
            }
        })
        .catch(error => console.error('데이터를 불러오는 중 오류 발생:', error));
});