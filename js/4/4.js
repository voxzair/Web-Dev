//1

let admin;
let name;

name = "John";
admin = name;

alert(name);

//2

let a = Number(prompt("Первое число?", 1));
let b = Number(prompt("Второе число?", 2));

alert(a + b); // 12


//3

for (let j = 2; j <= 10; j++) {
  if (j % 2 == 0) {
    console.log(j);
  }
}

//4

let o = 0;
while (o < 3) {
  alert(`number ${o}!`);
  o++;
}

//5

let y = -1;

while (y < 100) {
  y = Number(prompt("Enter number more then 100: ", 0));
}


//6

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const n = Number(prompt("Enter n: ", 2));
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) console.log(i)
}

