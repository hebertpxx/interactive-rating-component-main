//Element Captures

const ratings = document.getElementsByClassName('rating');
const ratingsParent = document.getElementById('rating');
const h1 = document.querySelector('h1');
const feedback = document.getElementById('feedback');
const star = document.getElementById('star');
const svg = document.querySelector('svg');
const noteSent = document.getElementById('noteSent');
const submit = document.querySelector('button');

//Events

for (const rating of ratings) {
    rating.addEventListener('click', activateRating);
}

submit.addEventListener('click', submitRating);

//Functions

function activateRating (event) {

    for(i = 0; i < 5; i++){
        ratingsParent.children[i].className = 'rating';
    }

    const alvo = event.target;
    alvo.classList.toggle('active');
}

function submitRating () {

    for(i = 0; i < 5; i++){
        
        const ratingValue = ratingsParent.children[i].className === 'rating active';

        if(ratingValue){

            const positionRatingValue = ratingsParent.children[i].textContent;

            noteSent.textContent = `You selected ${positionRatingValue} out of 5`;

            showThankYouScreen();

            return;

        }

    }

}

function showThankYouScreen () {

    const elementsToHide = [submit, star, ratingsParent];
    const elementsToShow = [svg, noteSent];

    elementsToHide.forEach(element => {
        element.style.display='none';
    });

    elementsToShow.forEach(element => {
        element.style.display='block';
    })

    h1.textContent = 'Thank you!'
    h1.style.margin = '0 auto';
    feedback.textContent = 'Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'

}