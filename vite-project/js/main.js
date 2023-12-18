import '../css/style.css';
import './dom'
import { DOMSelectors } from "./dom";

const agents = "https://valorant-api.com/v1/agents";
const weapons = "https://valorant-api.com/v1/weapons";
 

async function getData(URL){
    try {
        const response = await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        const res = await response.json();
        const agents = res.data.filter((agent) => agent.isPlayableCharacter === true);

        agents.forEach((agent)=> DOMSelectors.box.insertAdjacentHTML("afterBegin",
        `<div class="card"> 
        <h3 class = "">${agent.displayName}</h3> 
        <h4 class = "">${agent.description}</h4> 
        <img class = "image" src="${agent.fullPortrait}">`));

    } catch (error) {
        console.log("boo");
        DOMSelectors.box.innerHTML = "FIX YO ERROR";
    }
}

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
      <img class = "image" src="${weapon.displayIcon}">`));

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

switchTheme();



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}



// function filter(){
//     let buttons = DOMSelectors.button
    
//     buttons.forEach((agent)=>agent.addEventListener("click", function(){
//         let role = agent.textContent
//         let filter = agents.filter((agent)=>agent.role===role)
//             DOMSelectors.box.innerHTML = "";
//             insert(filter)
//             if (role === "All") {
//                 DOMSelectors.box.innerHTML = "";
//                 insert(agents);
//             }else {
//                 DOMSelectors.box.innerHTML = "";
//                 insert(filter)
//             }
//         }));
// }

// let filter = agents.filter((agent)=>agent.role===role)
// const letMePass = cards.filter((card)=> card.rarity === "Common").forEach((common) => console.log(common));
// const dontFail = cards.filter((card)=> card.printings.includes("5ED")).forEach((printing) => console.log(printing));


// async function getData(URL){
//     try {
//         //requesting a response REST API's
//         const response = await fetch (URL);
//         if (response.status !=200){
//             throw new Error(response.statusText);
//         }
//         //converting to js
//         const data = await response.json();
//         DOMSelectors.box.innerHTML = data.;
//         console.log(data.content);
//     } catch (error) {
//         console.log("boo");
//         DOMSelectors.box.innerHTML = "boo";
//     }
// }

// getData(URL);

// function insert(arr){
//     arr.forEach((el)=>DOMSelectors.box.insertAdjacentHTML("afterBegin",
//     `<div class="card"> <h2 class = "">${el.name} </h2> <h3 class = "">${el.role} </h3> <h3 class = "">${el.description}</h3> <img class="image" src="${el.image}"</div> `
//     ));
//     }

// function switchTheme() {
// document.body.classList.add('dark-theme');
// DOMSelectors.themeSwitcher.value = 'dark';
// DOMSelectors.themeSwitcher.addEventListener('click', () => {
//   if (DOMSelectors.themeSwitcher.value === 'dark'){
//     document.body.classList.add('light-theme');
//     document.body.classList.remove('dark-theme');
//     DOMSelectors.themeSwitcher.value = 'light';
//   }
//   else {
//     document.body.classList.add('dark-theme');
//     document.body.classList.remove('light-theme');
//     DOMSelectors.themeSwitcher.value = 'dark';
//   }
// })
// }

// switchTheme();
// insert(agents);
// filter();