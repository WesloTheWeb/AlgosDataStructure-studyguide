// A WoW inspired function. All the class combinations in a 5 man dungeon.
// ! not using a set
const dungeonParty = (characters) => {
    const party = [];
    const stack = [];

    const helper = (start) => {
        // base case
        if (stack.length === 5) {
            party.push([...stack]);
            return;
        };

        // loop
        for (let i = start; i < characters.length; i++) {
            const playerClass = characters[i];
            stack.push(playerClass);

            helper(i + 1);
            stack.pop();
        };
    };

    helper(0);
    return party;

};

const WoWClasses = ["Warrior", "Hunter", "Druid", "Priest", "Rogue", "Shaman", "Mage", "Warlock", "Paladin", "Death Knight", "Monk", "Demon Hunter", "Evoker"];

console.log(dungeonParty(WoWClasses));

// ! Using a Set Method
const alternateWayDungeonParty = (characters) => {
    const party = [];
    const stack = [];
    const set = new Set(characters)
  
    // Using a Set 
    const helper = () => {
      // base case
      if (stack.length === 5) {
        party.push([...stack])
        return;
      }
  
      for (let playerClass of characters) {
        // starting out
        if (set.has(playerClass)) {
          stack.push(playerClass);
          set.delete(playerClass);
          // recursion, we add then delete to not get duplicate
          helper();
  
          stack.pop();
          set.add(playerClass); // add player class back
        };
      };
    };
  
    helper();
    return party;
  };
    
  console.log(alternateWayDungeonParty(WoWClasses));