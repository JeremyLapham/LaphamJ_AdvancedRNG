import { getLocalStoage } from "./localstorage.js";
function GroupsOfTwo() {
  displayCards.innerHTML = '';
  let names = getLocalStoage();
  //Fisher-Yates shuffle still need to look into that more
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  }
  // Initialize an empty array to store the groups
  let groups = [];
  // Loop through the names and create groups of three
  for (let i = 0; i < names.length; i += 2) {
    let group = names.slice(i, i + 2);
    groups.push(group);
  }
  // If the last group has less than three names, merge it with the previous group
  if (groups.length > 1 && groups[groups.length - 1].length < 2) {
    let lastGroup = groups.pop();
    let previousGroup = groups.pop();
    let mergedGroup = previousGroup.concat(lastGroup);
    groups.push(mergedGroup);
  }

  // Print the groups
  groups.forEach((group, index) => {

    let row = document.createElement('div');
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';

    let h3 = document.createElement('h3');
    h3.className = 'groups'
    h3.textContent = `Group ${index + 1}: \n ${group.join("\n ")}`;

    row.appendChild(h3)
    displayCards.appendChild(row)
  });
}

function GroupsOfThree() {
  displayCards.innerHTML = '';
  let names = getLocalStoage();
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  }

  let groups = [];
  // Loop through the names and create groups of three
  for (let i = 0; i < names.length; i += 3) {
    let group = names.slice(i, i + 3);
    groups.push(group);
  }

  if (groups.length > 0 && groups[groups.length - 1].length < 3) {
    let lastGroup = groups.pop();
    if (lastGroup.length === 1) {
      if (groups.length > 0) {
        let previousGroup = groups.pop();
        previousGroup.push(lastGroup[0]);
        groups.push(previousGroup);
      } else {
        lastGroup.push(names.pop());
        groups.push(lastGroup);
      }
    } else if (lastGroup.length === 2) {
      let leftoverGroup = names.slice(-2);
      groups.push(leftoverGroup);
    }
  }

  groups.forEach((group, index) => {
    let row = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.className = 'groups'
    h3.textContent = `Group ${index + 1}: \n ${group.join("\n ")}`;
    row.appendChild(h3)
    displayCards.appendChild(row)
  });
}

function GroupsOfFour() {
  displayCards.innerHTML = '';
  let names = getLocalStoage();
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  }

  let groups = [];
  for (let i = 0; i < names.length; i += 4) {
    let group = names.slice(i, i + 4);
    groups.push(group);
  }

  if (groups.length > 0 && groups[groups.length - 1].length < 4) {
    let lastGroup = groups.pop();
    if (lastGroup.length === 1) {
      // Add the single leftover name to the previous group
      if (groups.length > 0) {
        let previousGroup = groups.pop();
        previousGroup.push(lastGroup[0]);
        groups.push(previousGroup);
      } else {
        lastGroup.push(names.pop());
        groups.push(lastGroup);
      }
    } else if (lastGroup.length === 2) {
      let leftoverGroup = names.slice(-2);
      groups.push(leftoverGroup);
    } else if (lastGroup.length === 3) {
      let leftoverGroup = names.slice(-3);
      groups.push(leftoverGroup);
    }
  }

  groups.forEach((group, index) => {
    let row = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.className = 'groups'
    h3.textContent = `Group ${index + 1}: \n ${group.join("\n ")}`;
    row.appendChild(h3)
    displayCards.appendChild(row)
  });
}

function GroupsOfFive() {
  displayCards.innerHTML = '';
  let names = getLocalStoage();
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]];
  }

  let groups = [];
  for (let i = 0; i < names.length; i += 5) {
    let group = names.slice(i, i + 5);
    groups.push(group);
  }

  if (groups.length > 0 && groups[groups.length - 1].length < 5) {
    let lastGroup = groups.pop();
    if (lastGroup.length === 1) {
      if (groups.length > 0) {
        let previousGroup = groups.pop();
        previousGroup.push(lastGroup[0]);
        groups.push(previousGroup);
      } else {
        lastGroup.push(names.pop());
        groups.push(lastGroup);
      }
    } else if (lastGroup.length === 2) {
      let leftoverGroup = names.slice(-2);
      groups.push(leftoverGroup);
    } else if (lastGroup.length === 3) {
      let leftoverGroup = names.slice(-3);
      groups.push(leftoverGroup);
    } else if (lastGroup.length === 4) {
      let leftoverGroup = names.slice(-4);
      groups.push(leftoverGroup);
    }
  }

  groups.forEach((group, index) => {
    let row = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.className = 'groups'
    h3.textContent = `Group ${index + 1}: \n ${group.join("\n ")}`;
    row.appendChild(h3)
    displayCards.appendChild(row)
  });
}

export { GroupsOfFive, GroupsOfFour, GroupsOfThree, GroupsOfTwo }