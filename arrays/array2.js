const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift('orange juice')
console.log(groceryList)

groceryList.unshift('popcorn');
console.log(groceryList);


console.log(groceryList.slice(1,4));
console.log(groceryList);
 const pastaIndex = groceryList.indexOf('pasta')
 console.log(pastaIndex);