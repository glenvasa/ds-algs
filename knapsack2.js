// find combination of items such that total weight <= 8 with the greatest total value
// i: array of objects (items in bag)
// o: array of objectts (meeting combination criteria above)

// approach
// 1) find all possible combination of items where weight <= 8
// 2) sort results in descending order by value so that array[0] is the combination with
//highest value

const sack = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
    { name: "d", value: 15, weight: 2 },
    { name: "e", value: 18, weight: 1 },
];

let maxCap = 8;

const knapsack = (items, cap, itemIndex) => {
    if (cap === 0 || itemIndex < 0) {
        return { items: [], value: 0, weight: 0}
    }

  if (cap < items[itemIndex].weight) {
    return knapsack(items, cap, itemIndex - 1);
  }

  // will return an object with items array, weight, and value properties
  const sackWithItem = knapsack(
    items,
    cap - items[itemIndex].weight,
    itemIndex - 1
  );

  const sackWithoutItem = knapsack(items, cap, itemIndex - 1);

  const valueWithItem = sackWithItem.value + items[itemIndex].value
  const valueWithoutItem = sackWithoutItem.value

  if (valueWithItem > valueWithoutItem) {
      const updatedSack = {
         items: sackWithItem.items.concat(items[itemIndex]),
         value: sackWithItem.value + items[itemIndex].value,
         weight: sackWithItem.weight + items[itemIndex].weight
      }
      return updatedSack
  } else  {
      return sackWithoutItem
  };
};

console.log(knapsack(sack, maxCap, sack.length - 1));
