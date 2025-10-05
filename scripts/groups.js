/******************************************/
// groups.js
// Code for the groups page 
// handles the slideshow movement and the info cards changing
/******************************************/

// Get key page elements
const chevrons = document.querySelectorAll(".chevron");
const totalCardsNum = Number(document.querySelectorAll(".cards-container > .card").length);

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
    //Setting up variables for all the cards which will be changed
    var nextCardNum;
    var hiddenCardNum;
    var oppDirection;

    //Get the current card and it's number in the order
    const currentCard = document.querySelector(".card.current");
    const currentCardNum = Number(currentCard.getAttribute("data-card-num"));

    // Get the nexCard, and the card behind it as well as the opposite direction to what was clicked
    if(_direction == "left") {
        nextCardNum = checkForSlideEnd(currentCardNum - 1);
        hiddenCardNum = checkForSlideEnd(nextCardNum - 1);
        oppDirection = "right";
    } else if(_direction == "right"){
        nextCardNum = checkForSlideEnd(currentCardNum + 1);
        hiddenCardNum = checkForSlideEnd(nextCardNum + 1);
        oppDirection = "left";
    }
    
    // Get the HTML elements of each card(next card, card behind it, the card which the current is replacing)
    var nextCard = document.querySelector(`.card[data-card-num="${nextCardNum}"]`);
    var hiddenCard = document.querySelector(`.card[data-card-num="${hiddenCardNum}"]`);
    var lastCard = document.querySelector(`.card.behind.${oppDirection}`);

    // MOVE ALL THE CARDS BY CHANGING THIER CLASSES
    //Move the card on the "end" by making it invisible
    lastCard.classList.remove(oppDirection, "behind");
    //Make the previous current card move behind in the right direction
    currentCard.classList.remove("current");
    currentCard.classList.add("behind", oppDirection);
    //Get the cards for the next and the hidden card then add the necessary classes to "move them"
    nextCard.classList.remove("behind", "left", "right");
    nextCard.classList.add("current");
    hiddenCard.classList.add("behind", _direction);

    // ADD THE ANIMATION CLASSES
    manageAnimClasses(lastCard, `${oppDirection}-hidden`);
    manageAnimClasses(currentCard, `center-${oppDirection}`);
    manageAnimClasses(nextCard, `${_direction}-center`);
    manageAnimClasses(hiddenCard, `hidden-${_direction}`);

    changeInfoCard(nextCardNum, currentCardNum);
}

/**********************************/
// manageAnimClasses(_card, _newAnim)
// Change the aniamtion class of the card element
// INPUT
//      _card - the card which is being changed
//      _newAnim - the new animation class
/**********************************/
function manageAnimClasses(_card, _newAnim) {
    const classStructure = /\w{4,}-\w{4,}/;
    let classes = Array.from(_card.classList);
    let animClass = classes.find(value => value.match(classStructure));

    _card.classList.remove(animClass);
    _card.classList.add(_newAnim);
}

/**********************************/
// checkForSlideEnd(_card)
// Makes sure the card number isn't 0 or above the actual number of cards
// INPUT
//      _cardNum - the card number to be checked
/**********************************/
function checkForSlideEnd(_cardNum) {
    if(_cardNum == 0) {
        return totalCardsNum;
    } else if(_cardNum == (totalCardsNum + 1)) {
        return 1;
    } else {
        return _cardNum;
    }
}

/**********************************/
// changeInfoCard(_newCardNum, _oldCardNum)
// Change the current info card to the next one in the slideshow
// INPUT
//      _newCardNum - the new info card num which will be made visible
//      _oldCardNum - the previous info card num which will be hidden
/**********************************/
function changeInfoCard(_newCardNum, _oldCardNum) {
    let newInfo = document.querySelector(`group-info-card[data-card-num="${_newCardNum}"]`);
    let oldInfo = document.querySelector(`group-info-card[data-card-num="${_oldCardNum}"]`);
    if(newInfo != null) {
        newInfo.classList.add("current");
    }
    oldInfo.classList.remove("current");
}
