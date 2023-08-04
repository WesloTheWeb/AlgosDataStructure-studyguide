// Random scratchpad 7-30-2022:
const gymBaddies = [
    'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn',
    'Abigail', 'Emily', 'Elizabeth', 'Mila', 'Ella', 'Avery', 'Scarlett', 'Grace', 'Chloe', 'Sofia',
    'Ella', 'Lily', 'Aria', 'Hannah', 'Layla', 'Aubrey', 'Lillian', 'Addison', 'Zoe', 'Zara',
    'Nora', 'Camila', 'Aurora', 'Hazel', 'Penelope', 'Victoria', 'Luna', 'Stella', 'Nova', 'Everly',
    'Eleanor', 'Ariana', 'Claire', 'Ruby', 'Alice', 'Savannah', 'Natalie', 'Emilia', 'Lila', 'Audrey'
  ];
  
  
  const gymCrushUWU = (person) => {
    const crush = gymBaddies[Math.floor(Math.random() * gymBaddies.length)];
    console.log(`Ooooh ${person} has a crush on ${crush} UWU`)
  };
  
  gymCrushUWU('Wesley')
  gymCrushUWU('Collin')
  
  
  class ShoppingCart {
    constructor(items = new Map()) {
      this.items = items;
    };
  
    // addItems(item){
    //   if (items.has(item)) {
    //     return this.items;
    //   } else {
    //     return this.items.push(item);
    //   }
    // };
  
    addItems(item) {
      if (this.items.has(item)) {
        this.items.set(item, this.items.get(item) + 1);
      } else {
        this.items.set(item, 1);
      }
    }
  
    getItems() {
      let result = [];
      for(let [item, quantity] of this.items) {
        result.push([item, quantity]);
      }
      return result;
    }
  };
  
  // const myCart = new ShoppingCart;
  // myCart.addItems('apple');
  // myCart.addItems('apple');
  // myCart.addItems('apple');
  // myCart.addItems('cookies');
  
  
  // console.log(myCart.getItems()); // Output: [ [ 'apple', 3 ] ]
  
  
  
  // console.log(myCart);
  
  // let rogueData = {};
  
  // rogueData["Trunk Data"] = {
  //   "Basic": {
  //     connections: [ "Core" ],
  //     x: 0,
  //     y: 0
  //   },
  // };
  
  // rogueData['uwu'] = [
  //   {
  //     name: 'owo'
  //   }
  // ] 
  
  // END
  
  // rogueData[24] = {
  //   name: 'test'
  // }
  
  // rogueData['27'] = [
  //   {
  //     name: 'owo'
  //   }
  // ]
  
  
  // console.log(rogueData) // we should see 1 object element that is an array.
  
  
  // /*
  // '''
  // ❓ PROMPT
  // Given *N* cents, write a function to determine the number of ways of using pennies, nickels, dimes, and quarters to represent it.
  
  // (Pennies are worth 1 cent; nickels, 5; dimes, 10; quarters, 25.) 
  
  // Example(s)
  // getNumWaysToMakeChange(1) == 1  (1 penny)
  // getNumWaysToMakeChange(3) == 1  (3 pennies)
  // getNumWaysToMakeChange(5) == 2  (1 nickel, or 5 pennies)
  
  // When "cents" increase, there are more ways of making change:
  // getNumWaysToMakeChange(12) == 4
  // Explanation:
  //   1 dime, 2 pennies
  //   2 nickels, 2 pennies
  //   1 nickel, 7 pennies
  //   12 pennies
  
  // getNumWaysToMakeChange(26) == 13
  // Explanation:
  //   1 quarter, 1 penny
  //   2 dimes, 1 nickel, 1 penny
  //   2 dimes, 6 pennies
  //   1 dime, 3 nickels, 1 penny
  //   1 dime, 2 nickels, 6 pennies
  //   1 dime, 1 nickel, 11 pennies
  //   1 dime, 16 pennies
  //   5 nickels, 1 penny
  //   4 nickels, 6 pennies
  //   3 nickels, 11 pennies
  //   2 nickels, 16 pennies
  //   1 nickel; 21 pennies
  //   26 pennies
   
  
  // 🔎 EXPLORE
  // List your assumptions & discoveries:
   
  
  // Insightful & revealing test cases:
   
  
  // 🧠 BRAINSTORM
  // What approaches could work?
  // Algorithm 1:
  // Time: O()
  // Space: O()
   
  
  // 📆 PLAN
  // Outline of algorithm #: 
   
  
  // 🛠️ IMPLEMENT
  // function getNumWaysToMakeChange(cents) {
  // def getNumWaysToMakeChange(cents: int) -> int:
   
  
  // 🧪 VERIFY
  // Run tests. Methodically debug & analyze issues.
  
  // '''
  // */