class Player {
    constructor(name) {
        this.name = name;
        this.cardAmount = 5;
        this.cardHand = [];
    }
}

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
        this.originalDeck = this.createDeck();
        this.shuffledDeck = this.shuffleDeck();
    }

    createDeck() {
        const deck = [];
        this.suits.forEach((suit) => {
            this.name.forEach((name, value) => {
                if (name === "Ace") {
                    deck.push(new Card(name, 14, suit));
                }
                else {
                    deck.push(new Card(name, value + 1, suit));
                }
            })
        });
        return deck;
    }

    shuffleDeck() {
        const newDeck = [...this.originalDeck];
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
        }
        return newDeck;
    }

    static giveCards(player1, player2) {

    }
}

const deck = new Deck();