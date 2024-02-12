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
        // this.shuffledDeck = [...this.originalDeck];
        //Lägg alla korten som har tagits bort från kortleken
        this.removedCards = [];
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

    set Deck(deck) {
        return this.originalDeck = deck;
    }

    static shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    static giveCards(originalDeck) {
        const splicedDeck = originalDeck.splice(originalDeck.length - player.cardAmount, player.cardAmount);
        console.log(splicedDeck);
    }
}

class Player extends Deck {
    constructor(name) {
        super()
        this.name = name;
        this.cardAmount = 5;
        this.cardHand = [];
    }
    
    test() {
        
    }
}

const deck = new Deck();
deck.Deck = deck.createDeck();
Deck.shuffle(deck.originalDeck);

const player = new Player("test");


// Deck.giveCards(deck.originalDeck);