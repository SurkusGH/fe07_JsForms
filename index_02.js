let P1 = document.querySelector('#p1')
let P2 = document.querySelector('#p2')
let P3 = document.querySelector('#p3')
let P4 = document.querySelector('#p4')
let ParaDiv = document.querySelector(".ParaDiv")

// • Pirmasis mygtukas pakeistų pirmame paragrafe esantį tekstą;
let B1 = document.querySelector('#b1')
B1.addEventListener("click", () => P1.textContent = "dIfErEnT tExT!")
B1.addEventListener("click", () => ParaDiv.style.backgroundColor = "lightyellow")
// • Antrasis mygtukas pridėtų tekstą šalia jau esamo, kitaip tariant papildytų;
let B2 = document.querySelector('#b2')
B2.addEventListener("click", () => P2.insertAdjacentText("beforeend", " *aDdEd tExT!*"))
B2.addEventListener("click", () => ParaDiv.style.backgroundColor = "lightcyan")

// • Trečiasis mygtukas pakeistų vieno iš paragrafų teksto spalvą;
let B3 = document.querySelector('#b3')
B3.addEventListener("click", () => P3.style.color="lightcoral")
B3.addEventListener("click", () => ParaDiv.style.backgroundColor = "lightgreen")

// • Ketvirtasis mygtukas tame tuščiame paragrafe įdėtų kažkokį tekstą.
let B4 = document.querySelector('#b4')
B4.addEventListener("click", () => P4.textContent = "tExT! tExT!")
B4.addEventListener("click", () => ParaDiv.style.backgroundColor = "lightsalmon")

//--- --- --- ---

let A1 = document.querySelector('#anim1')
let A2 = document.querySelector('#anim2')
let A3 = document.querySelector('#anim3')

A1.addEventListener("click", () => A1.style.display = "none")
A2.addEventListener("click", () => A2.style.display = "none")
A3.addEventListener("click", () => A3.style.display = "none")

//document.getElementById("mainFrameOne"). style. display="none";

