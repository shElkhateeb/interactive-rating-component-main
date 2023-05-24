const ratingScale = document.getElementById('ratingScale');
const submitButton = document.getElementById('submit');
let rate = 0;

ratingScale.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
        rate = event.target.value;
        //remove selected class from previous selection
        for (let i = 0; i < ratingScale.childElementCount; i++) {
            ratingScale.children[i].classList.remove('selected');
        }
        event.target.classList.add('selected');
        submitButton.disabled = false;
    }
});

let thankYou = document.getElementById('thankYouState');
let rating = document.getElementById('ratingState');

submitButton.addEventListener('click', () => {
    rating.classList.add('invisible');
    document.getElementById('rate').innerText = rate;
    thankYou.classList.remove('invisible');
    submitButton.disabled = true;
});