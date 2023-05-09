const ratingScale = document.getElementById('ratingScale');
const submitButton = document.getElementById('submit');
let rate = 0;

ratingScale.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        rate = event.target.value;
        submitButton.disabled = false;
    }
});

let thankYou = document.getElementById('thankYouState');
let rating = document.getElementById('ratingState');

submitButton.addEventListener('click', () => {
    ratingState.classList = 'invisible';
    document.getElementById('rate').innerText = rate;
    thankYou.classList = '';
    submitButton.disabled = true;
});