const openButton1 = document.querySelector('#openButton1')
const openButton2 = document.querySelector('#openButton2')
const openButton3 = document.querySelector('#openButton3')

const dialogBox = document.querySelector('#dialogBox')
const dialogBoxtext = document.querySelector('#dialogBox div')
const closeButton = document.querySelector('#closeButton')

//Show the dialog box

openButton1.addEventListener("click", () => {
    dialogBoxtext.innerHTML = "An apple has 95 calories"
    dialogBox.showModal();

});

openButton2.addEventListener("click", () => {
    dialogBoxtext.innerHTML = "An orange has 34 calories"
    dialogBox.showModal();

});
openButton3.addEventListener("click", () => {
    dialogBoxtext.innerHTML = "Bananas have 75 calories"
    dialogBox.showModal();

});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});