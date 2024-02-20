class Card {
    constructor(name, value, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
        this.name = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "King",
            "Queen",
            "Jack",
            "Ace"
        ];
        this.originalDeck = [];
        this.shuffledDeck = [];
        //Lägg alla korten som har tagits bort från kortleken
        this.removedCards = [];
    }

    createDeck() {
        const deck = [];
        this.suits.forEach((suit) => {
            this.name.forEach((name, value) => {
                deck.push(new Card(name, value + 2, suit));
            })
        });
        return deck;
    }

    set Deck(deck) {
        return this.originalDeck = deck;
    }

    set ShuffledDeck(deck) {
        return this.shuffledDeck = deck;
    }

    get shuffled() {
        return this.shuffledDeck;
    }

    static shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    giveCards(deck, cardAmount) {
        const splicedDeck = deck.shuffled.splice(deck.shuffled.length - cardAmount, cardAmount);
        deck.removedCards.push(splicedDeck);
        return splicedDeck;
    }


    removeCards(...cardAmount) {
        const result = player.cards.filter(card => !cardAmount.includes(card));
        console.log(player.cards);
        console.log(result);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.cardsHand = [];
    }

    set CardsHand(cards) {
        return this.cardsHand = cards;
    }

    get cards() {
        return this.cardsHand;
    }
}

const deck = new Deck();
const player = new Player();
const player2 = new Player();
deck.Deck = deck.createDeck();
// console.log(deck.originalDeck);
deck.ShuffledDeck = Deck.shuffle(deck.originalDeck);

player.CardsHand = deck.giveCards(deck, 5);
player2.CardsHand = deck.giveCards(deck, 5);

// console.log(player.cards);
// console.log(player2.cards);
deck.removeCards(player.cards[0], player.cards[3], player.cards[2])