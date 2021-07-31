let currentPage = 'product-list';

function decrement(object) {
    console.log(object.parentElement.childNodes[3].textContent);
    object.parentElement.childNodes[3].textContent--;
}

function increment(object) {
    console.log(object);
    object.parentElement.childNodes[3].textContent++;
}

function prev() {
    if (currentPage == 'billing-address') {
        document.getElementById('product-list').style.display = 'inline-block';
        document.getElementById('billing-address').style.display = 'none';
        document.getElementById('prev').classList.toggle('disabled-button');
        document.getElementById('next').classList.toggle('disabled-button');
        currentPage = 'product-list';
    }
}

function next() {
    if (currentPage == 'product-list') {
        document.getElementById('product-list').style.display = 'none';
        document.getElementById('billing-address').style.display = 'inline-block';
        document.getElementById('prev').classList.toggle('disabled-button');
        document.getElementById('next').classList.toggle('disabled-button');
        currentPage = 'billing-address';
    }
}

function placeOrder() {
    
}