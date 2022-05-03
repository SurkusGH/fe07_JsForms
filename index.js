console.log(`------------`)
console.log(`Asignment_01`)

const element = document.querySelector('#elem');

element.addEventListener('click', () => {
    console.log("Click happened!");
});

console.log(`------------`)
console.log(`Asignment_02`)

let sayHi = function() { alert( "Hello" ); };

const func = () => console.log('labas')
func();

const func2 = (a, b) => a + b // jeigu one liner fx tuomet nereikia "return";
const res = func2(2,3);
console.log(res);

//const func2 = (a, b = 1) => a + b // jeigu nepaduodame antros reikšmės, ji tampa default =1;
// console.log()

console.log(`------------`)
console.log(`Asignment_03`)
const getData = func3 = (a1, b1 = 2) => console.log(a1 + b1)
func3(1);
func3(1,3);

console.log(`------------`)
console.log(`Asignment_04`)

const bodyX = document.querySelector('body');

document.body.addEventListener("mouseover", () => console.log("mouse-is-over!"));
document.body.addEventListener("mouseout", () => console.log("mouse-is-GONE!"));

document.body.addEventListener("click", () => console.log("mouse-CLICKED!"));

const forma = document.querySelector('form');

forma.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log("???");0
});

const form = document.querySelector('form');
const output = document.querySelector('#output');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input1 = document.querySelector('#name').value;
  const input2 = event.target.elements[0].value;
  console.log('form has been submited');
  output.textContent = input1 + input2;
})

console.log(`------------`)
console.log(`Asignment_05`)

const formaB = document.querySelector('#FormaB');
const print = document.querySelector('#Printing');

formaB.addEventListener('submit', (event) => {
    event.preventDefault();
    let casheInput01 = document.querySelector('#nameHere').value;
    let casheInput02 = document.querySelector('#sureNameHere').value;
    sureNameHere

    const casheInput03 = event.target.elements[0].value;
    const casheInput04 = event.target.elements[1].value;
    console.log(casheInput03)
    console.log(casheInput04)

    print.textContent = `vardas: ${casheInput01} pavardė: ${casheInput02}`
    print.style.color = 'purple';
})