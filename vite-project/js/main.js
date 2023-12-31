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
        console.log("failed to obtain data");
        DOMSelectors.boxA.innerHTML = "failed to obtain data";
    }
}

async function insertA(arr, role){
    DOMSelectors.boxA.innerHTML = "";
    DOMSelectors.titleA.innerHTML = "Agents";

    if (role === "All" || role === "") {
        arr.forEach((el)=> DOMSelectors.boxA.insertAdjacentHTML("beforeEnd",
        `<div class="card">
        <h4>${el.displayName}</h4> 
        <h5>${el.description}</h5> 
        <img class = "image" src="${el.fullPortrait}" alt ="${el.displayName} portrait">`
        ));
    }
    else {
        const filterA = arr.filter((el) => el.role.displayName === role || el.role.displayName === "" )
        filterA.forEach((el)=> DOMSelectors.boxA.insertAdjacentHTML("beforeEnd",
        `<div class="card"> 
        <h4>${el.displayName}</h4> 
        <h5>${el.description}</h5> 
        <img class = "image" src="${el.fullPortrait}" alt ="${el.displayName} portrait">`
        ));
    }    
}


async function filterAgents() {
    const agents = await getAgents(apiAgents);
    await insertA(agents, "");
 
    let buttons = DOMSelectors.buttonA;
    buttons.forEach((agent) => agent.addEventListener("click", async function () {
        let role = agent.textContent

        await insertA(agents, role);
    }));
}

async function getWeapon(URL){
    try {
        const response = await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        const res = await response.json();
        const weapons = res.data;
  
        return weapons;

    } catch (error) {
        console.log("failed to obtain data");
        DOMSelectors.boxW.innerHTML = "failed to obtain data";
    }
}

async function insertW(arr, category){
    DOMSelectors.boxW.innerHTML = "";
    DOMSelectors.titleW.innerHTML = "Weapons";

    
    if (category === "ALL" || category === "") {
        arr.forEach((el)=> DOMSelectors.boxW.insertAdjacentHTML("beforeEnd",
        `<div class="card">
        <h4>${el.displayName}</h4> 
        <h5>Category: ${el.category.replace("EEquippableCategory::", "")}</h5>
       <img class = "image" src="${el.displayIcon}" alt ="${el.displayName} portrait"> `        ));
    }
    else {
        const filterW = arr.filter((el) => el.category.includes(category))
        filterW.forEach((el)=> DOMSelectors.boxW.insertAdjacentHTML("beforeEnd",
        `<div class="card"> 
        <h4>${el.displayName}</h4>
        <img class = "image" src="${el.displayIcon}" alt = "${el.displayName} portrait"> `
        ));
    }    
}

async function filterWeapons() {
    const weapons = await getWeapon(apiWeapons);
    await insertW(weapons, "");
 
    let buttons = DOMSelectors.buttonW;
    buttons.forEach((weapon) => weapon.addEventListener("click", async function () {
        let category = weapon.textContent

        await insertW(weapons, category);
    }));
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


filterAgents()
filterWeapons();
switchTheme();


//contrast ratio and proper html syntax 
//alt text and constrast and basic stuff yes