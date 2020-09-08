// #1
const merge = (a, b) =>
  [...new Set([...a, ...b])].filter((el) => a.includes(el) && b.includes(el));

console.log(merge([4, 4, 8], [4, 5])); // => [4]
console.log(merge([4, 4, 8, 10], [4, 5, 8, 10])); // => [4, 8, 10]

//////////////////////////////////////////////

// #2
const getAlphabetArr = (startChar, endChar, includeEndChar) =>
  Array.from(
    {
      length:
        endChar.charCodeAt(0) -
        startChar.charCodeAt(0) +
        (includeEndChar ? 1 : 0),
    },
    (v, i) => String.fromCharCode(startChar.charCodeAt(0) + i)
  );

function print(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(a);

      resolve();
    }, Math.random() * 5);
  });
}

const getAlphabetPart = (endChar, includeEndChar) =>
  getAlphabetArr("a", endChar, includeEndChar).reduce(
    (acc, el) => acc.then(() => print(el)),
    Promise.resolve()
  );

getAlphabetPart("f");

//////////////////////////////////////////////

// #3
const printNumber = function printSum(x) {
  if (printSum.cache === undefined) {
    printSum.cache = 1 + x;

    return printSum.cache;
  }

  printSum.cache = printSum.cache + x;

  return printSum.cache;
};

console.log(printNumber(2)); // => 3
console.log(printNumber(5)); // => 8
console.log(printNumber(1)); // => 9
console.log(printNumber(5)); // => 14
