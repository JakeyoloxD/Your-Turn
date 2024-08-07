// Arrays of planechase card names, images, and abilities
let cardNamesFirstPart = [
    "Reckless", "Wild", "Chaotic", "Demonic", "Corrupted", "Confusing", 
    "Mystic", "Surprising", "Overwhelming", "Furious", "Haunted", "Enigmatic", 
    "Blazing", "Ruthless", "Savage", "Unpredictable", "Shadowy", "Thunderous",
    "Ferocious", "Vengeful", "Arcane", "Brutal", "Malevolent", "Sinister", 
    "Cunning", "Infernal", "Raging", "Treacherous", "Wicked", "Abyssal", 
    "Celestial", "Frenzied", "Ethereal", "Grim", "Unholy", "Necrotic",
    "Spectral", "Dreadful", "Eldritch", "Phantasmal", "Vile", "Insidious", 
    "Fateful", "Destructive", "Malicious", "Cryptic", "Formidable", "Vindictive",
    "Maleficent", "Dire", "Mysterious", "Forbidden", "Volatile", 
    "Malevolous", "Baneful", "Ruinous", "Spectral", "Ghoulish",
    "Baleful", "Perilous", "Frightful", "Menacing", "Dark", "Savage",
    "Hostile", "Lurking", "Arcane", "Ominous"
];
let cardNamesSecondPart = [
    "Storm", "Tornado", "Explosion", "Massacre", "Encounter", "Surge", 
    "Mischief", "Favour", "Mind", "Wrath", "Tempest", "Fury", 
    "Cataclysm", "Spectacle", "Havoc", "Whirlwind", "Blitz", "Onslaught",
    "Inferno", "Eruption", "Calamity", "Revelation", "Upheaval", "Assault",
    "Ambush", "Ambition", "Scheme", "Chaos", "Annihilation", "Ascendance",
    "Conflagration", "Insurrection", "Maelstrom", "Devastation", 
    "Apocalypse", "Vortex", "Paradox", "Desolation", "Exodus", "Maelstrom",
    "Catastrophe", "Oblivion", "Dominion", "Pandemonium", 
    "Uprising", "Convulsion", "Tyranny", "Deception", "Vengeance", "Hysteria",
    "Eclipse", "Doom", "Anarchy", "Cataclysm", "Despair",
    "Transgression", "Specter", "Obsession", "Enigma", "Mayhem", "Rapture",
    "Delerium", "Rebellion", "Eradication", "Murder"
];
let cardImages = ["image1.jpg", "image2.jpg", "image3.jpg"];
let cardAbilities = ["Draw a card", "Create a treasure token", "Create 3 food tokens", "Play an extra land this turn", "Create 3 Soldier tokens", "Destroy all creatures on the battlefield", "Reduce the cost of spells this turn to zero", "Draw 5 cards", "Each player discards their hand and draws 7 cards",
    "Search your library for a basic land card and put it into play tapped", "You may take an extra turn after this one, if you do, you lose the game at the next endstep", "Each player gains 10 life", "Target player takes control of your turn, you gain control of their next turn.",
    "Create 5 treasure tokens", "Goad all creatures on the battlefield that you do not control", "You must attack this turn with all creatures you control. You can not be the target of spells or abilities until the end of the turn",
    "All creatures become 1/1 white sheep tokens with no abilties until end of turn", "You become the monarch",
    "Each player puts all cards from their hand into their library and shuffles. Each player draws 7 cards", "The last player to say 'Shot not!' must be attacked by each player until your next endstep.", "Each player points at a library, each player who's library was pointed at draws from the bottom of their library instead for their next card draw.",
    "Target one creature, that creature becomes an Eldrazi with base power and toughness of 10/10 and Annihilator 2 until the end of turn.", "Search each opponents library for a nonland permanent. If they can guess correctly in three guesses they may put it into play, if they fail to guess correctly you may put it into play under your control", "You lose 5 life", "Each player gains an infect counter",
    "Roll a dice and call 'Odds' or 'Evens' if you guess correctly you gain control of target nonland permanent that you do not control, if you guess incorrectly, target opponent may gain control of a nonland permanent you control, you may repeat this process until you have no nonland permanents under your control","You may tap 'Your turn!' three more times this turn!",
    "Exile the top card of your library. You may play it this turn.", 
    "Create a 4/4 green Beast token.", 
    "Each player sacrifices a creature.", 
    "Gain control of target creature until end of turn. Untap that creature. It gains haste until end of turn.", 
    "Create a 1/1 white Spirit token with flying.", 
    "Each player mills three cards.", 
    "Return target creature card from your graveyard to your hand.", 
    "You gain 5 life.", 
    "Each opponent loses 3 life.", 
    "Draw two cards, then discard a card.", 
    "Create a 2/2 black Zombie token.", 
    "Each player sacrifices an artifact.", 
    "You may cast your Commander for free this turn.", 
    "Return target nonland permanent to its owner's hand.", 
    "Each player reveals their hand.", 
    "Create a 3/3 green Centaur token.", 
    "Each player shuffles their graveyard into their library.", 
    "Each player sacrifices an enchantment.", 
    "Draw three cards.", 
    "Create a 6/6 green Wurm token.", 
    "Each player discards a card.", 
    "Exile target creature.", 
    "Create a 2/2 red Dragon token with flying.", 
    "Each opponent sacrifices a land.", 
    "Search your library for a nonbasic land card and put it onto the battlefield tapped.", 
    "Each player puts the top five cards of their library into their graveyard.", 
    "Draw a card for each creature you control.", 
    "Each player loses 2 life and draws two cards.", 
    "Return target card from your graveyard to the battlefield.", 
    "Each player creates a 1/1 blue Faerie token with flying.",
    "Each player takes 2 damage whenever they play a land until your next turn.",
    "Target opponent gains control of target permanent you control.",
    "Exile a creature you control, then return it to the battlefield under its owner's control.",
    "Each player shuffles their hand and graveyard into their library, then draws that many cards.",
    "Each player draws two cards at the beginning of their upkeep.",
    "Each player puts the top card of their library into the graveyard, then draws a card.",
    "Exchange control of target permanent you control and target permanent an opponent controls.",
    "Each player sacrifices a permanent at random.",
    "Each player exiles a card from their hand. At the beginning of the next end step, they put that card back into their hand.",
    "Each player reveals the top card of their library. The player who reveals the card with the highest mana value puts that card into their hand and loses 5 life. You may repeat this process.",
    "Each player exiles all creatures they control, then returns them to the battlefield under a random player's control.",
    "At the beginning of each player's upkeep, they exile the top card of their library. They may play that card this turn.",
    "Each player exchanges their hand with the player to their left.",
    "Whenever a player casts a spell, they exile the top card of their library. If it's a nonland card, they may cast it without paying its mana cost.",
    "Each player exiles a permanent they control, then returns it to the battlefield under its owner's control at the beginning of the next end step.",
    "Each player reveals the top card of their library. The player with the lowest mana value among revealed cards may cast them until end of turn without paying their mana cost.",
    "Each player creates a token that's a copy of target creature an opponent controls.",
    "Each player returns a land they control to its owner's hand, then draws a card.",
    "Each player reveals the top three cards of their library, puts one into their hand, and exiles the rest.",
    "Each player discards a card, then draws a card. If a player can't discard a card, they lose 3 life.",
    "Each player gains control of target nonland permanent an opponent controls chosen at random.",
    "Each player mills a card, then creates a token that's a copy of a creature card milled this way.",
    "Each player exiles all cards from their hand face down, then draws that many cards. At the beginning of the next end step, each player discards their hand and returns the exiled cards to their hand.",
    "Each player flips a coin. Each player whose coin comes up tails sacrifices a permanent they control.",
    "Each player exchanges control of all artifacts they control with the player to their right.",
    "Each player puts all nonland permanents they control on the bottom of their library in a random order, then reveals that many cards from the top of their library. They put all creature and land cards revealed this way onto the battlefield and the rest into their hand.",
    "Each player discards their hand, then draws a card for each card discarded this way.",
    "Each player chooses a creature they control. Exile those creatures, then return them to the battlefield under their owners' control.",
    "Each player creates a token that's a copy of target artifact an opponent controls.",
    "Each player reveals the top card of their library. Each player may put that card onto the battlefield if it's a permanent. Otherwise, they put it into their hand.",
    "Each player exchanges their life total with another player's chosen at random.",
    "Each player shuffles all permanents they control into their library, then reveals that many cards from the top of their library and puts all permanent cards revealed this way onto the battlefield tapped and the rest into their hand.",
    "Each player exiles the top ten cards of their library. For each land card exiled this way, that player takes 2 damage.",
    "Each player may cast an instant or sorcery card from their hand without paying its mana cost. Then, each other player copies that spell and may choose new targets for the copy.",
    "Each player gains control of all permanents they own. Then, each player loses life equal to the number of permanents they control.",
    "Each player discards their hand, then draws cards equal to the greatest number of cards a player discarded this way.",
    "Each player sacrifices all creatures they control, then creates that many 2/2 black Zombie creature tokens.",
    "Each player chooses a number between 1 and 5. Each player takes damage equal to their chosen number times 3. The player who chose the lowest number draws three cards.",
    "Each player flips a coin until they lose a flip. For each flip they win, they draw a card. For each flip they lose, they discard a card.",
    "Each player exchanges their library with another player's chosen at random. Each player shuffles their new library."
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

// Function to change the background image
function changeBackgroundImage() {
    let randomImage = getRandomCardImage();
    document.body.style.backgroundImage = `url('${randomImage}')`;
}

// Function to generate a random card ability text
function getRandomCardAbility() {
    return cardAbilities[Math.floor(Math.random() * cardAbilities.length)];
}

// Function to adjust the font size based on the text length
function adjustFontSize(textElement) {
    let textLength = textElement.value.length;
    if (textLength < 100) {
        textElement.style.fontSize = "2em"; // Larger font for short text
    } else if (textLength < 200) {
        textElement.style.fontSize = "1.5em"; // Medium font for moderate text
    } else {
        textElement.style.fontSize = "1em"; // Smaller font for long text
    }
}

// Function to generate and display a new card
function generateNewCard() {
    document.getElementById("card-name").textContent = getRandomCardName();
    let abilityTextElement = document.getElementById("ability-text");
    abilityTextElement.value = getRandomCardAbility();
    adjustFontSize(abilityTextElement);
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

// Variables to manage rate-limiting
let lastClickTime = 0;
const clickThreshold = 20; // Number of clicks to trigger the lock
const lockDuration = 5000; // Duration in milliseconds (5 seconds)
let clickCount = 0;
let isLocked = false;

// Function to handle "Your Turn!" button click
function handleYourTurnClick() {
    if (isLocked) {
        return;
    }

    clickCount++;
    const now = Date.now();

    if (now - lastClickTime > 1000) {
        // Reset click count if last click was more than 1 second ago
        clickCount = 1;
    }

    lastClickTime = now;

    if (clickCount >= clickThreshold) {
        // Lock the button, show the message, disable it, and display the image
        isLocked = true;
        const button = document.getElementById("new-plane-button");
        const image = document.getElementById("broken-image");
        button.textContent = "YOU BROKE THE APP";
        button.disabled = true;
        image.style.display = "block"; // Show the image

        // Play explosion sound
        let audio = new Audio('explosion.mp3');
        audio.play();

        // Re-enable the button after the lock duration
        setTimeout(() => {
            isLocked = false;
            clickCount = 0;
            button.textContent = "Your Turn!";
            button.disabled = false;
            image.style.display = "none"; // Hide the image
        }, lockDuration);
    } else {
        // Vibrate the device for 200 milliseconds
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        // Play the tap sound effect
        let audio = new Audio('tap.mp3');
        audio.play();
    }
}

// Generate initial card values when the page loads
window.onload = generateNewCard;

// Event listener for the new plane button
document.getElementById("new-plane-button").addEventListener("click", () => {
    generateNewCard();
    handleYourTurnClick();
});