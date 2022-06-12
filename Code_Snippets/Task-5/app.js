const inputField = document.getElementById('product-name');
inputField.addEventListener('input', (event) => {
    const remainingChars = document.getElementById('remaining-chars');
    remainingChars.textContent = event.target.maxLength - event.target.value.length;

    if(event.target.value.length >= 20) {
        remainingChars.style.color = "#EE5007";
        event.target.style.backgroundColor = 'rgba(238, 80, 7, 0.3)';
    }
    else if(event.target.value.length >= 10) {
        remainingChars.style.color = "#839AA8";
        event.target.style.backgroundColor = 'rgba(131, 154, 168, 0.3)';
    }
    else {
        remainingChars.style.color = "#635666";
        event.target.style.backgroundColor = '#FFF';
    }
});

// document.body.children[1].children[0].href = 'https://google.com';
// console.dir(document);
// console.dir(document.body);

// function clickedHandler() {
//     pElement.textContent = "clicked";
// }

// const pElement = document.getElementById('p');


// pElement.addEventListener('click', ()=>{
//     pElement.textContent = "clicked";
//     let inputElement = document.getElementById('input');
//     inputElement.value = "";
//     console.log("clicked");
// });

// const inputElement = document.getElementById('input');
// inputElement.addEventListener('input', (event) => {
//     // let enteredText = inputElement.value;
//     // console.log(enteredText);
//     console.log(event.target.value);
// });