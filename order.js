let currentPage = 'product-list';

function decrement(object) {
    if (object.parentElement.childNodes[3].textContent > 0) {
        object.parentElement.childNodes[3].textContent--;
    }
}

function increment(object) {
    object.parentElement.childNodes[3].textContent++;
}

function prev() {
    if (currentPage === 'billing-address') {
        document.getElementById('product-list').style.display = 'inline-block';
        document.getElementById('billing-address').style.display = 'none';
        document.getElementById('prev').classList.toggle('disabled-button');
        document.getElementById('next').classList.toggle('disabled-button');
        document.querySelector('#outer-space .vertical-line').style.height = "600px";
        currentPage = 'product-list';
    }
}

function next() {
    if (currentPage === 'product-list') {
        document.getElementById('product-list').style.display = 'none';
        document.getElementById('billing-address').style.display = 'inline-block';
        document.getElementById('prev').classList.toggle('disabled-button');
        document.getElementById('next').classList.toggle('disabled-button');
        document.querySelector('#outer-space .vertical-line').style.height = "650px";
        currentPage = 'billing-address';
    }
}

function addToOrder(object) {
    console.log(object.parentElement.parentElement.childNodes[1].textContent);
    console.log(object.parentElement.parentElement.childNodes[5].textContent);
    console.log(object.parentElement.parentElement.childNodes[7].childNodes[3].textContent);

    let name = document.createElement('td');
    let number = document.createElement('td');
    let singlePrice = document.createElement('td');
    let totalPrice = document.createElement('td');
    let actions = document.createElement('td')

    name.innerHTML = object.parentElement.parentElement.childNodes[1].textContent;
    number.innerHTML = object.parentElement.parentElement.childNodes[7].childNodes[3].textContent;
    singlePrice.innerHTML = object.parentElement.parentElement.childNodes[5].textContent;
    totalPrice.innerHTML = String(number.innerHTML * singlePrice.innerHTML);

    let productRow = document.createElement('tr');
    productRow.appendChild(name);
    productRow.appendChild(number);
    productRow.appendChild(singlePrice);
    productRow.appendChild(totalPrice);

    document.getElementById('yourOrder').appendChild(productRow);
    document.querySelector('#total span').textContent = String(Number(document.querySelector('#total span').textContent) + Number(totalPrice.innerHTML))
}

function placeOrder() {
    document.getElementById('outer-space').style.display = "none";
    document.getElementById('prev').style.display = "none";
    document.getElementById('next').style.display = "none";
    document.getElementById('place-order').style.display = "none";
    document.getElementById('message').style.display = "inline-block";
    document.getElementById('reset').style.display = "inline-block";
    document.getElementById('address').textContent =
        document.getElementById('fname').value + ' '
        + document.getElementById('lname').value + ' '
        + document.getElementById('street').value + ' '
        + document.getElementById('hnumber').value + ' '
        + document.getElementById('pcode').value + ' '
        + document.getElementById('city').value + ' '
        + document.getElementById('country').value
}

function clearOrder() {
    let table = document.getElementById('yourOrder')

    for (let i = document.querySelectorAll('#yourOrder tr').length; i > 1; i--) {
        table.deleteRow(i - 1);
    }
    document.querySelector('#total span').textContent = '0';
    /*while (table > 1) {
        table.removeChild(table.firstChild);
    }*/
}

function reset() {
    clearOrder();
    document.querySelectorAll('button + span').forEach(span => {
        span.textContent = '0';
    })
    document.getElementById('outer-space').style.display = "inline-block";
    document.getElementById('prev').style.display = "inline-block";
    document.getElementById('next').style.display = "inline-block";
    document.getElementById('place-order').style.display = "inline-block";
    document.getElementById('message').style.display = "none";
    document.getElementById('address').style.display = "none";
    document.getElementById('reset').style.display = "none";

    document.getElementById('fname').value = ''
    document.getElementById('lname').value = ''
    document.getElementById('street').value = ''
    document.getElementById('hnumber').value = ''
    document.getElementById('pcode').value = ''
    document.getElementById('city').value = ''
    document.getElementById('country').value = ''


}