// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція
// елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
// скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector("input[type='number']");
const createElem = document.querySelector("button[data-create]");
const destroyElem = document.querySelector("button[data-destroy]");
const divElem = document.querySelector("#boxes");
let amount = 0;
function inputFunction() {
  amount = inputElem.value;
}
function createBoxes(amount) {
  destroyFunction();
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const element = document.createElement("div");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    boxes.push(element);
      }
  divElem.append(...boxes);
}
createElem.addEventListener("click", createFunction);
inputElem.addEventListener("input", inputFunction);
destroyElem.addEventListener("click", destroyFunction);

function createFunction() {
  createBoxes(amount);
}
function destroyFunction() {
  divElem.innerHTML = "";
}
