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
    //Get the current card and it's number in the order
    const currentCard = document.querySelector(".card.current");
    const currentCardNum = Number(currentCard.getAttribute("data-card-num"));
    //Setting up variables for the next card and the card behind it
    var nextCardNum;
    var hiddenCardNum;
    var oppDirection;

    if(_direction == "left") {
        nextCardNum = checkForSlideEnd(currentCardNum + 1);
        hiddenCardNum = checkForSlideEnd(nextCardNum + 1);
        oppDirection = "right";
    } else if(_direction == "right"){
        nextCardNum = checkForSlideEnd(currentCardNum - 1);
        hiddenCardNum = checkForSlideEnd(nextCardNum - 1);
        oppDirection = "left";
    }
    console.log("Next = " + nextCardNum);
    console.log("hidden = " + hiddenCardNum);

    // MOVE ALL THE CARDS BY CHANGING THIER CLASSES
    //Move the card on the "end" by making it invisible
    document.querySelector(`.card.behind.${_direction}`).classList.remove(_direction, "behind");
    //Make the previous current card move behind in the right direction
    currentCard.classList.remove("current");
    currentCard.classList.add("behind", _direction);

    //Get the cards for the next and the hidden card then add the necessary classes to "move them"
    var nextCard = document.querySelector(`.card[data-card-num="${nextCardNum}"]`);
    var hiddenCard = document.querySelector(`.card[data-card-num="${hiddenCardNum}"]`);
    nextCard.classList.remove("behind", "left", "right");
    nextCard.classList.add("current");
    hiddenCard.classList.add("behind", oppDirection);
}

function checkForSlideEnd(_card) {
    if(_card == 0) {
        return totalCardsNum;
    } else if(_card == (totalCardsNum + 1)) {
        return 1;
    } else {
        return _card;
    }
}
