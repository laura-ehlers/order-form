function decrement(object) {
    console.log(object.parentElement.childNodes[3].textContent);
    object.parentElement.childNodes[3].textContent--;
}

function increment(object) {
    console.log(object);
    object.parentElement.childNodes[3].textContent++;
}