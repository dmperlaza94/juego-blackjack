/** c  trebol */
/** D  Diamantes */
/** H  Corazones */
/** S  Espadas */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "j", "Q", "K"];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {git 
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
    console.log(deck);
  }
  console.log(deck);
  _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();
//   para que se puedan dar cartas de manera aleatoria se debe descargar la libreria underscom y _.shuffle(variable)
