import '../css/style.css';
import './dom'
import { DOMSelectors } from "./dom";

const URL = "https://valorant-api.com/v1/agents";

async function getData(URL){
    try {
        const response = await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        const data = await response.json();
        let agents = data.data;
        let agentName = agents.map((agent) => (agent.displayName));
        agentName.forEach((name)=>console.log(name));
        DOMSelectors.box.insertAdjacentHTML("afterBegin",
            `<div class="card"> <h2 class = "">${agentName} </h2>`);
        // agentName.forEach(name => {
        //     DOMSelectors.box.innerHTML = "";}

    } catch (error) {
        console.log("boo");
        DOMSelectors.box.innerHTML = "FIX YO ERROR";
    }
}

getData(URL);

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