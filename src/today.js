// // Реалізуйте функціонал отримання даних з API по кліку на кнопку "BUTTON" і виведення їх
// // на сторінку при кожному кліку по кнопці. Кожен факт має мати свій порядковий номер.
// // https://catfact.ninja/

// import axios from "axios";

// const refs = {
//     btn: document.querySelector('.btn'),
//     factsUl: document.querySelector('.facts')
// };

// refs.btn.addEventListener('click', onBtnClick)

// let id = 1;

// function onBtnClick() {
//     axios.get('https://catfact.ninja/fact')
//         .then(response => {
//             const markup = `<li>${id} ${response.data.fact}</li>`
            
//             refs.factsUl.insertAdjacentHTML("beforeend", markup);
//             id += 1
//         }
//     )
//     .catch(err => console.log(err))
// }

// // Реалізуйте функціонал пошуку даних по юзеру з API при сабміті форми і виведення їх на сторінку
// // https://agify.io/