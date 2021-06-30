/** c  trebol */
/** D  Diamantes */
/** H  Corazones */
/** S  Espadas */

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "j", "Q", "K"];

let puntosJugador = 0,
  puntosComputador = 0;
//Referencia del DOM

const botonPedir = document.querySelector("#btnPedir");
const puntosPartida = document.querySelectorAll("small");
const btnDetener = document.querySelector("#btnParar");
const btnNuevo = document.querySelector("#btnInicio");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasComputadora = document.querySelector("#computadora-cartas");

//jugador-cartas

//Esta funcion crea un nuevo baraja
const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
    // console.log(deck);
  }
  // console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

crearDeck();
//   para que se puedan dar cartas de manera aleatoria se debe descargar la libreria underscom y _.shuffle(variable)

// funcion para tomar una carta de la baraja y esta misma debe de desaparecer de la baraja

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "NO HAY CARTAS EN LA BARAJA";
  }

  const carta = deck.pop();

  console.log(deck);
  console.log(carta); // la carta debe ser de la baraja y por eso deja de existir del arreglo
  return carta;
};

// for (let i = 0; i <= 60; i++) {
//   pedirCarta();
// }
// pedirCarta();

// PARA SABER EL VALOR DE LA CARTA
const valorCarta = (carta) => {
  //extaer el primer valor de la carta
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
}; // SE MULTIPLICA POR UNOO PARA QUE EL VALOR SE LEA EN JS COMO UN NUMERO NO COMO STRING
// console.log({ valor });

// //para saber si es un numero se evalua con isNaN
// if ) {
//   console.log("No es un numero");

//   puntos =
// } else {
//   console.log("Es un numero");
//   puntos =
const valor = valorCarta(pedirCarta());
console.log({ valor });

// TURNO DEL COMPUTADOR

const turnoComputador = (puntosMinimos) => {
  do {
    const carta = pedirCarta();

    puntosComputador = puntosComputador + valorCarta(carta);
    puntosPartida[1].innerText = puntosComputador;

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputador < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputador === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputador > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 200);
};

// Creacion de los Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();

  puntosJugador = puntosJugador + valorCarta(carta);
  puntosPartida[0].innerText = puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    alert("PERDISTE, VUELVE A INTENTAR");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputador(puntosJugador);
  } else if (puntosJugador === 21) {
    alert("21, GANASTE");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputador(puntosJugador);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputador(puntosJugador);
});

btnNuevo.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = crearDeck();

  puntosJugador = 0;
  puntosComputador = 0;

  puntosPartida[0].innerText = 0;
  puntosPartida[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
