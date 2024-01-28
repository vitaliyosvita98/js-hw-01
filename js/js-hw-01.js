const zarplata = parseInt(prompt("Введіть свою зарпалут"));
const numPremiya = 0.15;
const numPodatki = 0.10;
const premiya =  zarplata * numPremiya;
console.log(premiya);
const podatki = (zarplata + premiya) * numPodatki;
console.log(podatki);
const vitrati = 190;

const result = zarplata + premiya - podatki - vitrati;
console.log(result);

alert(`Залишок зарпати ${result}, Премия : ${premiya}, Податки : ${podatki}`);