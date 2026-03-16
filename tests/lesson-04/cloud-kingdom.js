//Bài 1
let playerName = 'Mario';
let currentLives = 3;
const COINS_BY_LEVEL = {
  LEVEL_1: 25,
  LEVEL_2: 30,
  LEVEL_3: 45
};

const sumCoinsByLevel = COINS_BY_LEVEL.LEVEL_1 + COINS_BY_LEVEL.LEVEL_2 + COINS_BY_LEVEL.LEVEL_3;
const averageCoinsByLevel = sumCoinsByLevel / 3;

const remainingCoins = sumCoinsByLevel % 3;
console.log(`Remaining coins after dividing total coins by 3: ${remainingCoins}`);

//Bài 2
let powerUp = 'mushroom';
let effect = '';
if (powerUp === 'mushroom') {
  effect = 'Mario becomes Super!';
} else if (powerUp === 'flower') {
  effect = 'Mario can shoot fireballs!';
} else if (powerUp === 'star') {
  effect = 'Mario is invincible!';
} else if (powerUp === 'none') {
  effect = 'Mario is normal';
} else {    
    effect = 'Unknown power-up';
}
console.log(effect);