const name = "Paweł";
const age = 32;

console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log("Siema!");

const heading = document.querySelector('.main__header--js');

console.log(heading);

console.log(heading.innerHTML)

heading.innerHTML = 'Witaj świecie pisze do Ciebie za pośrednictwem javaScript';

console.log(heading.innerHTML)

const description = document.querySelector('.main__description--js');

console.log(description.innerHTML)

description.innerHTML = 'JavaScript ponownie wygenerowała ten nagłówek';

console.log(description.innerHTML)