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
function changeCard(_direction) {
    //Setting up variables for the next card and the card behind it
    var nextCardNum;
    var hiddenCardNum;
    var oppDirection;

    //Get the current card and it's number in the order
    const currentCard = document.querySelector(".card.current");
    const currentCardNum = Number(currentCard.getAttribute("data-card-num"));

    if(_direction == "left") {
        nextCardNum = checkForSlideEnd(currentCardNum + 1);
        hiddenCardNum = checkForSlideEnd(nextCardNum + 1);
        oppDirection = "right";
    } else if(_direction == "right"){
        nextCardNum = checkForSlideEnd(currentCardNum - 1);
        hiddenCardNum = checkForSlideEnd(nextCardNum - 1);
        oppDirection = "left";
    }
    var nextCard = document.querySelector(`.card[data-card-num="${nextCardNum}"]`);
    var hiddenCard = document.querySelector(`.card[data-card-num="${hiddenCardNum}"]`);
    var lastCard = document.querySelector(`.card.behind.${_direction}`);

    // MOVE ALL THE CARDS BY CHANGING THIER CLASSES
    //Move the card on the "end" by making it invisible
    lastCard.classList.remove(_direction, "behind");
    //Make the previous current card move behind in the right direction
    currentCard.classList.remove("current");
    currentCard.classList.add("behind", _direction);
    //Get the cards for the next and the hidden card then add the necessary classes to "move them"
    nextCard.classList.remove("behind", "left", "right");
    nextCard.classList.add("current");
    hiddenCard.classList.add("behind", oppDirection);

    // ADD THE ANIMATION CLASSES
    manageAnimClasses(lastCard, `${_direction}-hidden`);
    manageAnimClasses(currentCard, `center-${_direction}`);
    manageAnimClasses(nextCard, `${oppDirection}-center`);
    manageAnimClasses(hiddenCard, `hidden-${oppDirection}`);

    changeInfoCard(nextCardNum, currentCardNum);
}

function manageAnimClasses(_card, _newAnim) {
    const re = /\w{4,}-\w{4,}/;
    let classes = Array.from(_card.classList);
    let animClass = classes.find(value => value.match(re));

    _card.classList.remove(animClass);
    _card.classList.add(_newAnim);
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

function changeInfoCard(_newCardNum, _oldCardNum) {
    let newInfo = document.querySelector(`.group-info[data-card-num="${_newCardNum}"]`);
    let oldInfo = document.querySelector(`.group-info[data-card-num="${_oldCardNum}"]`);
    if(newInfo != null) {
        newInfo.classList.add("current");
    }
    oldInfo.classList.remove("current");
}
