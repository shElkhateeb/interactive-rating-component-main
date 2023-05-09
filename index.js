const ratingScale = document.getElementById('ratingScale');
const submitButton = document.getElementById('submit');
let rate = 0;

ratingScale.addEventListener('click', (event)=> {
    if (event.target.tagName === 'INPUT') {
        rate = event.target.value;
        submitButton.disabled = false;
    } 
});