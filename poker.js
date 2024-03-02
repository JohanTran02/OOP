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

    get Deck() {
        return this.originalDeck;
    }

    static shuffle(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    }

    reset() {
        this.removedCards = [...new Set(this.removedCards.flatMap((x) => [...x]))];
        this.originalDeck = [...this.originalDeck, ...this.removedCards];
        this.removedCards = [];
        Deck.shuffle(this.originalDeck);
    }

    giveCards(player, deck, cardAmount) {
        const splicedDeck = deck.originalDeck.splice(-(cardAmount), cardAmount);
        player.Cards = [...player.Cards, ...splicedDeck];
        deck.removedCards.push(splicedDeck);
    }

    removeCards(player, playerCards) {
        const result = player.Cards.filter(card => !playerCards.includes(card));
        player.Cards = [...result];
        deck.removedCards.push(playerCards);
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

    get Cards() {
        return this.cardsHand;
    }

    set Cards(cards) {
        return this.cardsHand = cards;
    }

    get cardSum() {
        return this.Cards.map(card => card.value).reduce((result, current) => result + current, 0);
    }
}

const deck = new Deck();
const player = new Player("Slim");
const player2 = new Player("Lucas");
deck.Deck = deck.createDeck();

Deck.shuffle(deck.Deck);
console.log([...deck.Deck]);

deck.giveCards(player, deck, 5);
deck.giveCards(player2, deck, 5);

console.log(deck.removedCards);
console.log(deck.Deck);
console.log(player);
console.log(player2);

deck.removeCards(player, [player.Cards[0], player.Cards[1]]);
deck.removeCards(player2, [player2.Cards[0], player2.Cards[1]]);

deck.giveCards(player, deck, 2);
deck.giveCards(player2, deck, 2);

console.log(deck.Deck);
console.log(player);
console.log(player2);

deck.removeCards(player, player.Cards);
deck.removeCards(player2, player2.Cards);

deck.reset();

console.log(deck.removedCards);
console.log(deck.originalDeck);

