// Arrays of planechase card names, images, and abilities
let cardNamesFirstPart = ["Reckless", "Wild", "Chaotic", "Demonic", "Corrupted", "Confusing", "Mystic", "Surprising", "Overwhelming"];
let cardNamesSecondPart = ["Storm", "Tornado", "Explosion", "Massacre", "Encounter", "Surge", "Mischief", "Favour", "Mind"];
let cardImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
let cardAbilities = ["Draw a card", "Create a treasure token", "Create 3 food tokens", "Play an extra land this turn", "Create 3 Soldier tokens", "Destroy all creatures on the battlefield", "Reduce the cost of spells this turn to zero", "Draw 5 cards", "Each player discards their hand and draws 7 cards",
    "Search your library for a basic land card and put it into play tapped", "You may take an extra turn after this one, if you do, you lose the game at the next endstep", "Each player gains 10 life", "Target player takes control of your turn, you gain control of their next turn.",
    "Create 5 treasure tokens", "Goad all creatures on the battlefield that you do not control", "You must attack this turn with all creatures you control. You can not be the target of spells or abilities until the end of the turn",
    "All creatures become 1/1 white sheep tokens with no abilties until end of turn", "You become the monarch",
    "Each player puts all cards from their hand into their library and shuffles. Each player draws 7 cards", "The last player to say 'Shot not!' must be attacked by each player until your next endstep.", "Each player points at a library, each player who's library was pointed at draws from the bottom of their library instead for their next card draw.",
    "Target one creature, that creature becomes an Eldrazi with base power and toughness of 10/10 and Annihilator 2 until the end of turn.", "Search each opponents library for a nonland permanent. If they can guess correctly in three guesses they may put it into play, if they fail to guess correctly you may put it into play under your control", "You lose 5 life", "Each player gains an infect counter",
    "Roll a dice and call 'Odds' or 'Evens' if you guess correctly you gain control of target nonland permanent that you do not control, if you guess incorrectly, target opponent may gain control of a nonland permanent you control, you may repeat this process until you have no nonland permanents under your control","You may tap 'Your turn!' three more times this turn!"
];

// Function to generate a random card name
function getRandomCardName() {
    let firstPart = cardNamesFirstPart[Math.floor(Math.random() * cardNamesFirstPart.length)];
    let secondPart = cardNamesSecondPart[Math.floor(Math.random() * cardNamesSecondPart.length)];
    return firstPart + " " + secondPart;
}

// Function to generate a random card image URL
function getRandomCardImage() {
    return cardImages[Math.floor(Math.random() * cardImages.length)];
}

// Function to generate a random card ability text
function getRandomCardAbility() {
    return cardAbilities[Math.floor(Math.random() * cardAbilities.length)];
}

// Function to generate and display a new card
function generateNewCard() {
    document.getElementById("card-name").textContent = getRandomCardName();
    document.getElementById("ability-text").value = getRandomCardAbility();
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Generate initial card values when the page loads
window.onload = generateNewCard;

// Event listener for the new plane button
document.getElementById("new-plane-button").addEventListener("click", generateNewCard);
