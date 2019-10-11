let result = (function () {

    const Suits = {
        CLUBS: '♣',
        DIAMONDS: '♦',
        HEARTS: '♥',
        SPADES: '♠'
    };

    const Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            if (!Faces.includes(face)) {                
                throw new Error('Invalid card face: ' + face);
            }
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error('Invalid card suite: ' + suit);
            }
            this._suit = suit;
            this._face = face;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!Faces.includes(face)) {                
                throw new Error('Invalid card face: ' + face);
            }
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error('Invalid card suite: ' + suit);
            }
            this._suit = suit;
        }

        toString() {
            return `${this._face}${this._suit}`;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}());
let Card = result.Card;
let Suits = result.Suits;

let card = new Card("1",Suits.CLUBS);