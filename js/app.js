
const numberone = document.getElementById('numberone');
const numbertwo = document.getElementById('numbertwo');
const numberthree = document.getElementById('numberthree');
const need = document.getElementById('need');
const activate = document.getElementById('button');

const percentajeone = 0.25;
const percentajetwo = 0.35;
const percentajethree = 0.40;
let num1 = 0;
let num2 = 0;
let num3 = 0;

let sum = 0;
let prom = 0;
let promneeded = 0;

activate.addEventListener('click', findProm);

function findProm(num1, num2, num3, sum, promneeded, nota){
    num1 = parseFloat(numberone.value * percentajeone);
    num2 = parseFloat(numbertwo.value * percentajetwo);
    num3 = parseFloat(numbertwo.value * percentajethree);
    sum = parseFloat(num1 + num2 + num3);
    nota = 3.5;
    promneeded = parseFloat(nota-sum);
    console.log(sum);
    if (sum < nota) {
        need.textContent = `Su promedio es : ${sum} , necesitas: ${promneeded} para ganar la materia `;
        need.style.color = 'red';
    }if(sum > nota){
        need.textContent = `Ha ganado la materia`;   
        need.style.color = 'green';
    }
}