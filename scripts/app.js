import { saveToLocalStorage, getLocalStoage, removeFromLocalStorage } from "./localstorage.js";
import { GroupsOfFive, GroupsOfFour, GroupsOfThree, GroupsOfTwo } from "./groups.js";

const enterName = document.getElementById('enterName');
const enterNameBtn = document.getElementById('enterNameBtn');
const displayNames = document.getElementById('displayNames');
const nameLengthDisplay = document.getElementById('nameLengthDisplay');

const group2 = document.getElementById('group2');
const group3 = document.getElementById('group3');
const group4 = document.getElementById('group4');
const group5 = document.getElementById('group5');

enterName.addEventListener('keydown', function (e) {
    let letters = /^[A-Za-z-,. ]+$/;
    if (e.key === 'Enter') {
        if (enterName.value == '' || !enterName.value.match(letters)) {
            alert('Please enter a valid')
        } else {
            saveToLocalStorage(enterName.value)
            displayNamesOnScreen()
            enterName.value = '';
        }
    }
});
enterNameBtn.addEventListener('click', function () {
    let letters = /^[A-Za-z-,. ]+$/;
    if (enterName.value == '' || !enterName.value.match(letters)) {
        alert('Please enter a valid')
    } else {
        saveToLocalStorage(enterName.value)
        displayNamesOnScreen()
        enterName.value = '';
    }
});

group2.addEventListener('click', function () {
    GroupsOfTwo()
});
group3.addEventListener('click', function () {
    GroupsOfThree()
});
group4.addEventListener('click', function () {
    GroupsOfFour()
});
group5.addEventListener('click', function () {
    GroupsOfFive()
});

function displayNamesOnScreen() {
    displayNames.innerHTML = '';
    let peopleNames = getLocalStoage();
    nameLength()
    peopleNames.map(name => {
        let row = document.createElement('div');
        row.className = 'row';
        row.style.display = 'flex';
        row.style.marginBottom = '1rem';
        row.style.marginLeft = '1rem';
        row.style.marginRight = '1rem';
        row.style.border = '2px solid';

        let col1 = document.createElement('div');
        col1.className = 'col-6';

        let col2 = document.createElement('div');
        col2.className = 'col-6';
        col2.style.display = 'flex';
        col2.style.alignItems = 'center';
        col2.style.justifyContent = 'center';

        let h2 = document.createElement('h2');
        h2.textContent = name;

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.textContent = 'Delete';
        deleteBtn.type = 'button';
        deleteBtn.addEventListener('click', function () {
            removeFromLocalStorage(name)
            row.remove()
            nameLength()
        });

        col1.appendChild(h2);
        col2.appendChild(deleteBtn);
        row.appendChild(col1);
        row.appendChild(col2);
        displayNames.appendChild(row);
    })
}
displayNamesOnScreen()

function nameLength() {
    let peopleNames = getLocalStoage()
    nameLengthDisplay.textContent = `Names in list: ${peopleNames.length}`;
}

const body = document.getElementById('body');
const sun1 = document.getElementById('sun1');
const sun2 = document.getElementById('sun2');
const sun3 = document.getElementById('sun3');
const sun4 = document.getElementById('sun4');
const moon1 = document.getElementById('moon1');
const moon2 = document.getElementById('moon2');
const moon3 = document.getElementById('moon3');
let date = new Date();
let currentHour = date.getHours();

if (currentHour >= 6 && currentHour < 18) {
    body.className = "body";
    sun1.classList.remove('hide');
    sun2.classList.remove('hide');
    sun3.classList.remove('hide');
    sun4.classList.remove('hide');
} else {
    body.className = "body2";
    moon1.classList.remove('hide');
    moon2.classList.remove('hide');
    moon3.classList.remove('hide');
}