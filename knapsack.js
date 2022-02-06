const sack = [
    {name: 'apple', weight: 4, value: 4},
    {name: 'banana', weight: 3, value: 5},
    {name: 'grapefruit', weight: 5, value: 3},
    {name: 'watermelon', weight: 7, value: 6}
]

const maxWeight = 8

function kpFn(items, cap, i, memo){
    console.log('running')
    if(memo[cap][i]){
        return memo[cap][i]
    }

    // base case where no more capacity left in bag or no more items to check
    if(cap === 0 || i < 0){
        return { items: [], value: 0, weight: 0}
    }
    // case where can not add item b/c weight is more than remaining capacity
    if(items[i].weight > cap){
        return kpFn(items, cap, i-1, memo)
    }

   // compare voluntarily adding or not adding item to sack by recursively calling kp twice (once for each scenario)
    const sackWithItem = kpFn(items, cap - items[i].weight, i-1, memo) // returns object w/items array, value, weight
    const sackWithoutItem = kpFn(items, cap, i-1, memo)

    // then compare the values to see which is greater
    const valueWithItem = sackWithItem.value + items[i].value
    const valueWithoutItem = sackWithoutItem.value

    let resultSack

    if(valueWithItem > valueWithoutItem){
        const updatedSack = {
            items: sackWithItem.items.concat(items[i]),
            value: sackWithItem.value + items[i].value,
            weight: sackWithItem.weight + items[i].weight
        }
        resultSack = updatedSack
    } else {
        resultSack = sackWithoutItem
    }

    memo[cap][i] = resultSack
    return resultSack

}
 //adding memoization to reduce time complexity significantly
function kp(items, cap, i){
    // const mem = Array(cap + 1).fill(Array(items.length).fill(undefined))
    // both methods for creating 2 dimensional array work but preffered method is below
    const mem = Array.from(Array(cap + 1), () => Array(items.length).fill(undefined))
    
    return kpFn(items, cap, i, mem)
}

// console.log(kpFn(sack, maxWeight, sack.length -1));
console.log(kp(sack, maxWeight, sack.length -1 ))



// Time complexity w/o memoization => O(2^n)
// Time complexity w/memoization => O(n * C) 