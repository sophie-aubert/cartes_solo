import {Deck} from "./Deck.js"


export const options = {

    values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
    suits: ["Hearts", "Diamonds", "Spades", "Clubs"]

}

const monDeck = new Deck(options)
monDeck.createFullDeck()
monDeck.shuffle()
monDeck.displayCards()
console.log(monDeck)
