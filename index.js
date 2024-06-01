// // index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
// //     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
// //     блоки з короткою іфною про post - в ряд по 5 .

// // В index.html
// // 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// // 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// // 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// // котра має детальну інфорацію про об'єкт на який клікнули
const basicDiv = document.createElement('div');
basicDiv.classList.add('basicDiv');
document.body.appendChild(basicDiv);
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((user)=>console.log(user))

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((user)=>console.log(user))