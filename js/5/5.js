//1

function reverse(n) {
  return Number(n.toString().split("").reverse().join(""));
}

function noDups(n) {
  return Number(Array.from(new Set(n.toString().split(""))).join(""));
}

function digitNumber(n, d) {
  return Number(n.toString().split(d).length - 1);
}

function a(n) {
  const bin = n.toString(2);
  let maxZeros = 0;
  let maxOnes = 0;

  let currentZeros = 0;
  let currentOnes = 0;

  for (let char of bin) {
    if (char === "0") {
      currentZeros++;
      currentOnes = 0;
    } else {
      currentOnes++;
      currentZeros = 0;
    }

    maxZeros = Math.max(maxZeros, currentZeros);
    maxOnes = Math.max(maxOnes, currentOnes);
  }

  return {
    bin,
    maxZeros,
    maxOnes,
  };
}

const n = Number(prompt("number:", 0));

console.log(reverse(n));
console.log(noDups(n));

const d = Number(prompt("digit:", 0));

console.log(digitNumber(n, d));
console.log(a(n));


//2

function firstNoDups(str) {
  for (let charOut of str) {
    let num = 0;
    for (let charIn of str) {
      if (charOut === charIn) num++;
    }
    if (num == 1) return charOut;
  }
  return str[0];
}

function randomizedString(n) {
  const chars =
    "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  let result = "";

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

function noDups(str) {
  return Array.from(new Set(str.split(""))).join("");
}

console.log(firstNoDups(prompt("string:", "")));
console.log(randomizedString(Number(prompt("string:", 1))));
console.log(noDups(prompt("string:", "")));

