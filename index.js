/*
Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>.
При пропажі фокусу - <div> так само пропадає.
*/
// Я сделал Три варианта. стили писал не по БЕМ так как время на все не очень хватает)

// Вариант №1 в котором divSpirit задан в HTML со стилем opacity = "0", при фокуме меняеться на opacity = "1"
// при потери фокуса на opacity = "0". также можно display: none.

let inputOne = document.querySelector('.inputOne');
let divSpiritOne = document.querySelector('.div_spirit');
inputOne.addEventListener('focus',() => {divSpiritOne.style.opacity = "1"});
inputOne.addEventListener('focusout',() => {divSpiritOne.style.opacity = "0"});

// Вариант № 2
// тут я уже сохдаю ранее не существующий #div_spirit_two при фокусе а потом его удаляю при потере фокуса
// создание #div_spirit_two привязываю именно к узлу с полем inputTwo,
// поэтому мои функцыи создания и удаления принимают аргумент которым являеться узел inputTwo
// а вызов addEventListener происходит стрелочной функцией в которой возвращает мою функцию с пораметром

function addDivSpirit (nodeEvent) {
    nodeEvent.insertAdjacentHTML('afterend', `<div id = "div_spirit_two"> Героям Слава!! </div>`);
}
function removeDivSpirit () {
    document.getElementById('div_spirit_two').remove();
}

let inputTwo = document.querySelector('#inputTwo');
inputTwo.addEventListener('focus',(ev) => {addDivSpirit(inputTwo)});
inputTwo.addEventListener('focusout', removeDivSpirit);

// Вариант № 3
// потом я понят, что я могу сработать с this, и мне не нужно передавать аргументом узел в котором
// я вызиваю addEventListener, так как он будет this.

function addDivSpiritThree () {
    this.insertAdjacentHTML('afterend', `<div id = "div_spirit_three"> Героям Слава!! </div>`);
}
function removeDivSpiritThree () {
    document.getElementById('div_spirit_three').remove();
}
let inputThree = document.querySelector('#inputThree');
inputThree.addEventListener('focus', addDivSpiritThree);
inputThree.addEventListener('focusout', removeDivSpiritThree);

