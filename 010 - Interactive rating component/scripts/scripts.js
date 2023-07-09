const numberCirclesDOM = document.querySelectorAll('.number-circle');
const ratingCardDOM = document.querySelector('.rating');
const thankyouCardDOM = document.querySelector('.thank-you');
const selectedNumberDOM = document.querySelector('.selected-number');

let activeRatingNumber;

function selectRating(number) {
    const selectedRatingDOM = numberCirclesDOM[number-1];

    if(activeRatingNumber) {
        const activeRatingDOM = numberCirclesDOM[activeRatingNumber-1];
        activeRatingDOM.classList.remove('number-circle-active');
    }

    selectedRatingDOM.classList.add('number-circle-active');
    activeRatingNumber = number;
}

function submit() {
    if(!activeRatingNumber) return;
    ratingCardDOM.classList.add('hidden');
    thankyouCardDOM.classList.remove('hidden');

    selectedNumberDOM.textContent = activeRatingNumber;
}