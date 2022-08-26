/**
 * Folosit doar pentru debugging (a gasii erori si probleme in cod)
 */
console.log("Test");

// Comentariu pe o linie

/* 
   Comentariu pe mai multe
  linii
 */

/**
 * Comentariu pe
 *  mai multe
 *
 * linii
 */

/**
 * Variabile
 *
 * var, let, const
 *
 * camelCase = inaltimePatratTest
 * snake_case = inaltime_patrat_test
 */
let variabilaMea = 0;
variabilaMea = 1;

const inaltime = 10;
const latime = 10;

console.log(inaltime);
console.log("\n"); // new line (linie noua)

/**
 * Operatori matematici
 *  + , - , * , /
 */
const adunare = inaltime + latime;
console.log("adunare", adunare);

const scadere = inaltime - latime;
console.log("scadere", scadere);

const inmultire = inaltime * latime;
console.log("inmultire", inmultire);

const impartire = inaltime / latime;
console.log("impartire", impartire);

const restulImpartirii = inaltime % 2;
console.log("Restul impartirii la 2: ", restulImpartirii);

/**
 * Aria cercului
 */
const PI = 3.14;
const razaCercului = 5;

console.log("Raza:", PI * razaCercului * razaCercului);
console.log("Raza2:", Math.pow(PI * razaCercului, 2))

/**
 * Tipuri primitive de date
 * number ( numar )
 * string ( text )
 * boolean ( conditie, adevarat sau fals )
 */

const text = "Mario";
console.log("Text:", text, typeof text);

const myNumber = 10;
console.log("myNumber:", myNumber, typeof myNumber);

const conditieAdevarata = true;
const conditieFalsa = false;

console.log("conditieAdevarata:", conditieAdevarata, typeof conditieAdevarata);

/**
 * Strings
 */
const prenume = "John";
const nume = "Doe";

/**
 * Concatenare de string-uri
 */
console.log(prenume + " " + nume);

/**
 * Template strings
 */
console.log(`My name is ${prenume} ${nume}`);

/**
 * Erori
 */
const x = "Mario";
const y = "Luigi";

console.log(x, y);

/**
 * Functii
 */

/**
 * ES5 
 * Vedeti http://bguiz.github.io/js-standards/es5/functions/
 * pentru mai multe info
 */
function calculateSum(a, b) {
  console.log("Suma:", a + b);
  return a + b;
}

/**
 * ES6 (Arrow functions) =>
 * https://www.w3schools.com/js/js_arrow_function.asp
 */
const calculateSum2 = (a, b) => {
  return a + b;
};

const value = calculateSum(5, 12);
const value2 = calculateSum2(5, 12);

console.log("value:", value);
console.log("value2:", value2);

const makeSum = (a, b) => a + b;
const power = (a) => a * a;

console.log("POWER:", power(makeSum(10, 10)));

const dynamicPower = (a, b) => {
  return Math.pow(a, b);
};

console.log("1:", dynamicPower(10, 2));
console.log("2:", dynamicPower(10, 3));
console.log("3:", dynamicPower(10, 4));
console.log("4:", dynamicPower(10, 5));

const function1 = (fn) => {
  fn();
};

// ES5 - Anonymous function / Functie anonima
function1(function () {
  console.log("Yeeeey");
});

// ES6 - Anonymous function / Functie anonima
function1(() => {
  console.log("Heloooooo");
});

/**
 * Conditii si luarea decizilor
 *
 * if = daca
 * if (conditie) { // fa ceva }
 * daca (conditie = adevarata) { ruleaza codul din acolade }
 *
 *
 * = - asignare / atribuire
 * == - verifica egalitatea dupa valoare
 * === - verifica egalitatea dupa valoare si tip
 *
 *  && - SI
 *  || - SAU
 *   ! - NEGATIE
 *  !== - NU E EGAL CU
 */
const fruct = "para";

if (fruct === "mar") {
  console.log("fruct", fruct);
} else if (fruct === "pepene") {
  console.log("fruct2", fruct);
} else {
  console.log("fruct3", fruct);
}

const a = 5;
const b = 12;

/**
 * a > b (>) - mai mare
 * a < b (<) - mai mic
 * a <= b (<=) - mai mic sau egal
 * a >= b (>=) - mai mare sau egal
 * ! - negare (not)
 * ===  !== (diferit de)
 */
if (a > b) {
  console.log("a > b");
} else if (a < b) {
  console.log("a < b");
} else if (a <= b) {
  console.log("a <= b");
} else if (a >= b) {
  console.log("a >= b");
} else if (a !== b) {
  console.log("a !== b");
} else {
  console.log("???");
}

const checkA = () => {
  console.log("CHECKING A")
  switch (a >= 5) {
    case true:
      console.log("1");
     break;  
    case false:
      console.log("2");
      break; 
    case 3:
      console.log("3");
      break; 
    case 5:
        console.log("5");
        break; 
    default:
      console.log("AAA:", a);
  }
};

checkA()

if (b > a && b > 10) {
  console.log("1: Conditie OK");
}

if (a > b || a > 4) {
  console.log("2: Conditie OK");
}

if ((a > b || a < b) && b < 13) {
  console.log("3: Conditie OK");
}

/**
 * primul parametru - nume
 * al doilea parametru - prenume
 * al treilea parametru - varsta
 *
 * Buna, numele meu este ... , am x ani.
 */
const introFunction = (nume, prenume, varsta) => {
  return `Buna, numele meu este ${nume} ${prenume}, am ${varsta} ani.`;
};

const intro1 = introFunction("Mihail", "Gavril", 69);
console.log("Introducere 1:", intro1);
