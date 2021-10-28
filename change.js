// create combination of coins such that the total value = target value, using fewest amount of coins
// I: coinArray below with target = 129
// O: {100: 1, 50: 0, 20: 1, 10: 0, 5: 1, 2: 2, 1: 0, totalCoins: 5 }

const coinArray = [100, 50, 20, 10, 5, 2, 1];
const target = 129;

const change = (coinArray, target) => {
  let coins = {};
  coinArray.map((c) => (coins[c] = 0));
  let amountRemaining = target;
  let totalCoins = 0;

  for (const coin of coinArray) {
    while (coin <= amountRemaining) {
      coins[coin] += 1;
      amountRemaining -= coin;
      totalCoins += 1;
    }
  }
  
  return `The fewest coins needed to reach the sum of ${target} is ${totalCoins}`;
};

console.log(change(coinArray, target));
