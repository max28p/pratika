const listOne = document.getElementById("list-one");
const listTwo = document.getElementById("list-two")
const listThree = document.getElementById("list-three");
let numberList = 1;
buttonlogic();
buttonSwitch();

function oneListBut() {
    listOne.classList.remove("disable-list");
    listTwo.classList.add("disable-list");
    listThree.classList.add("disable-list");
    numberList = 1
    buttonlogic();
    buttonSwitch();
}

function twoListBut() {
    listOne.classList.add("disable-list");
    listTwo.classList.remove("disable-list");
    listThree.classList.add("disable-list");
    numberList = 2;
    buttonlogic();
    buttonSwitch();
}

function threeListBut() {
    listOne.classList.add("disable-list");
    listTwo.classList.add("disable-list");
    listThree.classList.remove("disable-list");
    numberList = 3;
    buttonlogic();
    buttonSwitch();
}

function buttonlogic() {
    const buttonPrevious = document.getElementById("previousBut");
    const buttonNext = document.getElementById("nextBut");

    if (numberList === 1) {
        buttonPrevious.disabled = true;
        buttonNext.disabled = false;
    } else if (numberList === 3) {
        buttonPrevious.disabled = false;
        buttonNext.disabled = true;
    } else {
        buttonPrevious.disabled = false;
        buttonNext.disabled = false;
    }
}

function buttonSwitch() {
    const oneListButton = document.getElementById("oneListBut");
    const twoListButton = document.getElementById("twoListBut");
    const threeListButton = document.getElementById("threeListBut");
    
    if (numberList === 1) {
        oneListButton.classList.add("active-button-switch");
        twoListButton.classList.remove("active-button-switch");
        threeListButton.classList.remove("active-button-switch");
    } else if (numberList === 2) {
        oneListButton.classList.remove("active-button-switch");
        twoListButton.classList.add("active-button-switch");
        threeListButton.classList.remove("active-button-switch");
    } else if (numberList === 3) {
        oneListButton.classList.remove("active-button-switch");
        twoListButton.classList.remove("active-button-switch");
        threeListButton.classList.add("active-button-switch");
    }
}