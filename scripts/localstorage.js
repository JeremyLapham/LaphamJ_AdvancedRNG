const rndBtn = document.getElementById('rndBtn');
const displayRndName = document.getElementById('displayRndName');

rndBtn.addEventListener('click', function() {
    let names = getLocalStoage();
    let rndName = names[Math.floor(Math.random()*names.length)];
    displayRndName.textContent = rndName;
})

function saveToLocalStorage(name) {
    let names = getLocalStoage();

    names.push(name);
    localStorage.setItem('People', JSON.stringify(names));

}

function getLocalStoage() {
    let localStorageData = localStorage.getItem('People');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name) {
    let names = getLocalStoage();
    let nameIndex = names.indexOf(name);

    names.splice(nameIndex,1);
    localStorage.setItem('People', JSON.stringify(names));
}

export { saveToLocalStorage, getLocalStoage, removeFromLocalStorage }