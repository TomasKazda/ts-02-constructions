let expression: boolean = false;
let text: string = 'Done';

expression = text === 'Done'

if (expression) {
    console.log('Hello TypeScript');
    console.log('Hello OtherScript');
} else {
    console.log('Hello JavaScript');
}

let wallet: number = 10000;
let cost: number = Math.round(Math.random() * 1000);

while (wallet >= cost) {
  wallet -= cost;
  console.log(wallet);
  cost = Math.round(Math.random() * 1000);
}

wallet = 10000;

let i = 5;
while (i > 0) {
  wallet -= Math.round(Math.random() * 1000);
  console.log(i)
  i += -1;
}


for (let i = 5; i > 0; i += -1) {
  wallet -= Math.round(Math.random() * 1000);
  console.log(i)
}