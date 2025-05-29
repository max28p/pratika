const listOne = document.getElementById("list-one");
const listTwo = document.getElementById("list-two")
const listThree = document.getElementById("list-three");

function oneListBut () {
    console.log("1")
    listOne.classList.remove('disable-list');
    listTwo.classList.add('disable-list');
    listThree.classList.add('disable-list');
}

function twoListBut () {
    console.log("2")
    listOne.classList.add('disable-list');
    listTwo.classList.remove('disable-list');
    listThree.classList.add('disable-list');
}

function threeListBut () {
    console.log("3")
    listOne.classList.add('disable-list');
    listTwo.classList.add('disable-list');
    listThree.classList.remove('disable-list');
}