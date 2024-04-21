import './components/page-header.js';
import './components/page-footer.js';

const btnCallFormInput = document.querySelector('#btnCallFormInput');
const popupForm = document.querySelector('.container-form');
const closeIcon = document.querySelector('.close-icon i');
const titleTag = document.querySelector('#title');
const descTag = document.querySelector('textarea');
const btnSubmit = popupForm.querySelector('.btn-submit');
const formTitle = document.querySelector('.form-header h3');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

btnCallFormInput.addEventListener('click', () => {
    titleTag.focus();
    popupForm.classList.add('show');
});

closeIcon.addEventListener('click', () => {
    popupForm.classList.remove('show');
});
// btnSubmit.addEventListener('click', (event) => {
//     event.preventDefault();
//     let noteTitle = titleTag.value;
//     let noteDesc = descTag.value;
//     if (noteTitle || noteDesc){
//         let dateObj = new Date();
//         let hours = dateObj.getHours();
//         let minutes = dateObj.getMinutes();
//         let month = months[dateObj.getMonth()];
//         let day = dateObj.getDate();
//         let year = dateObj.getFullYear();

//         let notesData = {
//             id: `notes-${Date.now()}`,
//             title: noteTitle,
//             body: noteDesc,
//             createdAt: `${hours}:${minutes} ${month} ${day} ${year}`
//         };
//     };
// });