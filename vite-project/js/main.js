import '../css/style.css';
import './dom'
import { DOMSelectors } from "./dom";

const apiAgents = "https://valorant-api.com/v1/agents";
const apiWeapons = "https://valorant-api.com/v1/weapons";

async function getAgents(URL){
    try {
        const response = await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        const res = await response.json();
        const agents = res.data.filter((agent) => agent.isPlayableCharacter === true);

        return agents;

    } catch (error) {
        console.log("boo");
        DOMSelectors.box.innerHTML = "FIX YO ERROR";
    }
}

async function insertA(arr, role){
    DOMSelectors.box.insertAdjacentHTML ("afterbegin" = "");

    DOMSelectors.box.insertAdjacentHTML("afterBegin",
        `<h3> Agents </h3> `);

    if (role === "All" || role === "") {
        arr.forEach((el)=> DOMSelectors.box.insertAdjacentHTML("afterBegin",
        `<div class="card">
        <h4 class = "">${el.displayName}</h4> 
        <h5 class = "">${el.description}</h5> 
        <img class = "image" src="${el.fullPortrait}" alt ="agent portrait">`
        ));
    }
    else {
        const filterE = arr.filter((el) => el.role.displayName === role || el.role.displayName === "" )
        filterE.forEach((el)=> DOMSelectors.box.insertAdjacentHTML("afterBegin",
        `<div class="card"> 
        <h4 class = "">${el.displayName}</h4> 
        <h5 class = "">${el.description}</h5> 
        <img class = "image" src="${el.fullPortrait}" alt ="agent portrait">`
        ));
    }    
}

async function filter() {
    getAgents(apiAgents);
    const agents = await getAgents(apiAgents);

    await insertA(agents, "");
 
    let buttons = DOMSelectors.buttonA;
    buttons.forEach((agent) => agent.addEventListener("click", async function () {
        let role = agent.textContent

        await insertA(agents, role);
    }));
}

filter();





async function getWeapon(URL){
  try {
      const response = await fetch (URL);
      if (response.status !=200){
          throw new Error(response.statusText);
      }
      const res = await response.json();
      const weapons = res.data;

      weapons.forEach((weapon)=> DOMSelectors.box.insertAdjacentHTML("afterBegin",
      `<div class="card"> 
      <h3 class = "">${weapon.displayName}</h3> 
      <h4 class = "">${weapon.category}</h4> 
      <img class = "image" src="${weapon.displayIcon}" alt ="weapon portrait"> `));

  } catch (error) {
      console.log("boo");
      DOMSelectors.box.innerHTML = "FIX YO ERROR";
  }
}


function switchTheme() {
    document.body.classList.add('dark-theme');
    DOMSelectors.themeSwitcher.value = 'dark';
    DOMSelectors.themeSwitcher.addEventListener('click', () => {
      if (DOMSelectors.themeSwitcher.value === 'dark'){
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        DOMSelectors.themeSwitcher.value = 'light';
      }
      else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        DOMSelectors.themeSwitcher.value = 'dark';
      }
  })
}

//contrast ratio and proper html syntax 
//alt text and constrast and basic stuff yes