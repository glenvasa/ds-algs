// find combination of items such that total weight <= 8 with the greatest total value
// i: array of objects (items in bag)
// o: array of objectts (meeting combination criteria above)

// approach
// 1) find all possible combination of items where weight <= 8
// 2) sort results in descending order by value so that array[0] is the combination with
//highest value

// const knapsack = (items) => {
//     let combos = []
//     let result
//     for (let i= 0; i< items.length; i++) {
//         if(items[i].w === 8){
//             combos.push([items[i], items[i].v])
//         }
//         let comp = 8 - items[i].w
//         for (let j=0; j< items.length; j++){
//             if(items[j].w <= comp && items[i] != items[j]){
//                 combos.push([items[i], items[j], items[i].v + items[j].v])
//             }
//             if(comp < items[j].w){
//                 combos.push([items[i], items[i].v])
//             }
//         }
//     }
//     console.log(combos);
//     let sorted = combos.sort((a,b) => b[b.length-1] - a[a.length-1])
//     console.log(sorted);
//     result = sorted[0]
//     return result
// }

// const bag = [
//     { id: 'a', v: 3, w: 3},
//     { id: 'b', v: 5, w: 8},
//     { id: 'c', v: 13, w: 3},
//     { id: 'd', v: 15, w: 2}
// ]

/// result currently works only if 1 or 2 items may be chosen
// doesn't currently check to see if 3 or more items can add up to weight of 8

// console.log(knapsack(bag));

const knapsack = (items) => {
  let combos = [];
  for (let i = 0; i < items.length; i++) {
    let tempsack = {};
    if (items[i].w <= 8) {
      tempsack.w = items[i].w;
      tempsack.v = items[i].v;
      tempsack.choices = [items[i].id];
    }

    console.log(tempsack.w, tempsack.v, tempsack.choices);
    for (let j = 0; j < items.length; j++) {
      if (items[i] != items[j] && (8 - tempsack.w - items[j].w) >= 0);
      {
        tempsack.w += items[j].w;
        tempsack.v += items[j].v;
        tempsack.choices = [...tempsack.choices, items[j]];
      }
    }
    console.log(tempsack.w, tempsack.v, tempsack.choices);
  }

  // return combos
};
const bag = [
  { id: "a", v: 3, w: 3 },
  { id: "b", v: 5, w: 8 },
  { id: "c", v: 13, w: 3 },
  { id: "d", v: 15, w: 2 },
];

console.log(knapsack(bag));
