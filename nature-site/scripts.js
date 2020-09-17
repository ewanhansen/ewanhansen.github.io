//Select elements
const selectElement = (s) => document.querySelector(s);

//Open nav menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Close nav menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});