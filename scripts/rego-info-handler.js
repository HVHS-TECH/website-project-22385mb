//creating an interval for an automatic slideshow change
var slideInterval = setInterval(changeCard, 5000, "right", true);

const chevrons = document.querySelectorAll(".chevron");
const totalCardsNum = Number(document.querySelector(".cards-container").childElementCount);

chevrons.forEach((chevron) => {
    chevron.addEventListener("click", (event) => {
        let direction = event.target.id.split("-")[1];
        changeCard(direction);
    })
})


/**********************************/
// changeCard(_direction)
// Change the current card to the next one in the slideshow
// INPUT
//      _direction - specify either "left" or "right" to direct which way the slideshow moves 
/**********************************/
function changeCard(_direction, _automatic) {
    // If the user clicks through the cards the automatic change timer is reset
    if(_automatic != true) {
        clearInterval(slideInterval);
        slideInterval = setInterval(changeCard, 5000, "right", true);
    }

    const currentCard = document.querySelector(".card.current");
    const currentCardNum = Number(currentCard.getAttribute("data-card-num"));
    var nextCardNum;

    if(_direction == "left") {
        // currentCard.previousElementSibling.classList.add("current");
        nextCardNum = currentCardNum - 1;
    } else if(_direction == "right"){
        // currentCard.nextElementSibling.classList.add("current");
        nextCardNum = currentCardNum + 1;
    }

    // Check for "end" of slideshow on either side
    if(nextCardNum == 0) {
        nextCardNum = totalCardsNum;
    } else if(nextCardNum == (totalCardsNum + 1)) {
        nextCardNum = 1;
    }

    //
    document.querySelector(`.card[data-card-num="${nextCardNum}"]`).classList.add("current");
    currentCard.classList.remove("current");
}