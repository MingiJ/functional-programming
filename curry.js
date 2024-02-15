const { curry } = require("ramda");

const add = (x, y) => x + y;

/*const toPair =
  (f) =>
    ([x, y]) =>
      add(x, y);
const modulo = curry((x, y) => y % x);*/

const curriedAdd = curry(add);

const increment = curriedAdd(1);

const result = increment(2);

console.log(result);

// curry exercises
const split = curry((delimiter, string) => string.split(delimiter));

//exercise 1
const words = split(" ");

module.exports = {
  words,
};


//composition
const toUpper = str => str.toUpperCase();

const exclaim = str => str + "!";

const first = xs => xs[0];

const compose = (f,g) => x => f(g(x))

const shout = compose(exclaim, toUpper)

console.log(shout("tears"));
