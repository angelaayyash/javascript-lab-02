"use strict";

const randomDamage = _ => Math.floor(Math.random() * 10) + 1;
console.log(randomDamage());

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return (randNum = randNum === 0 ? opt1 : opt2);
};

const attackPlayer = function(health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}.`);
};
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}.`);
};

const isDead = health => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);

      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}
fight("Angela", "Nicole", 100, 100);

// Extended Exercise

// function printSquare(width) {
//   let poundSymbol = "#";
//   for (let i = 0; i < width; i++) {
//     console.log(poundSymbol.repeat(width));
//   }
// }
// printSquare(3);

// Extended Triangle:

// function printTriangle(width) {
//   let pound = "#";
//   for (let i = 1; i <= width; i++) {
//     console.log(pound.repeat(i));
//   }
// }

// printTriangle(4);
