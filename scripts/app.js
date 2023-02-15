import { saveToLocalStorage, getLocalStoage, removeFromLocalStorage } from "./localstorage.js";

const enterName = document.getElementById('enterName');
const enterNameBtn = document.getElementById('enterNameBtn');
const displayNames = document.getElementById('displayNames');


enterName.addEventListener('keydown', function (e) {
    if(e.key==='Enter'){
        saveToLocalStorage(enterName.value)
        displayNamesOnScreen()
        enterName.value = '';
    }
});
enterNameBtn.addEventListener('click', function () {
    saveToLocalStorage(enterName.value)
    displayNamesOnScreen()
    enterName.value = '';
});

function displayNamesOnScreen() {
    displayNames.innerHTML = '';
    let peopleNames = getLocalStoage()
    peopleNames.map(name=> {
        let row = document.createElement('row');
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        row.style.marginBottom = '1rem';

        let h2 = document.createElement('h2');
        h2.textContent = name;

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger';
        deleteBtn.textContent = 'Delete';
        deleteBtn.type = 'button';
        deleteBtn.addEventListener('click', function () {
            removeFromLocalStorage(name)
            row.remove()
        });

        row.appendChild(h2);
        row.appendChild(deleteBtn);
        displayNames.appendChild(row);
    })
}
displayNamesOnScreen()







































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