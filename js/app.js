// const search = document.getElementById('search');
// search.addEventListener('keyup', e => {
//     let currentValue = e.target.value.toLowerCase();
//     console.log(currentValue);
//     let data = document.querySelectorAll('data-caption');
//     data.forEach(searchFunction);
// });

// function searchFunction() {
//     if (data.textContent.toLowerCase().includes(currentValue)) {
//         console.log('it work');
//         } else {
//         console.log('wrong');
//         }
// }

// function searchFunction() {
//     if (data.textContent.toLowerCase().includes(currentValue)) {
//         data.parentNode.style.display = 'block';
//         } else {
//             data.parentNode.style.display = 'none';
//         }
// }

const search = new Filter('search', 'data-caption');