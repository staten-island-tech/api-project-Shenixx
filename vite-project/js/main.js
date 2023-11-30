import '../css/style.css';
import './agents';
import './dom'
import { agents } from "./agents";
import { DOMSelectors } from "./dom";

const URL = `https://api.myanimelist.net/v2`;

async function getData(URL){
    try {
        //requesting a response REST API's
        const response = await fetch (URL);
        if (response.status !=200){
            throw new Error(response.statusText);
        }
        //converting to js
        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
        console.log(data.content);
    } catch (error) {
        console.log("boo");
        document.querySelector("h1").textContent = "booooo";
    }
}

getData(URL);

// function insert(arr){
//     arr.forEach((el)=>DOMSelectors.box.insertAdjacentHTML("afterBegin",
//     `<div class="card"> <h2 class = "">${el.name} </h2> <h3 class = "">${el.role} </h3> <h3 class = "">${el.description}</h3> <img class="image" src="${el.image}"</div> `
//     ));
//     }

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