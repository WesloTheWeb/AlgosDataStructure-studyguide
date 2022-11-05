/**  Nov 4th 2022
Problem Statement

Ned and Mary want to choose a restaurant to bring their kids to for the evening, and they both have a list of their favorite places, represented by strings and sorted by preference. The place they each prefer the most is at the beginning of the list, and their least preferred at the end.
You need to help them find the optimal match to dine at based on their combined preferences score. They will often have to compromise, so their ideal option is a place they both have on their list, and it has the highest combined preference score.
To calculate the highest combined preference score, get the restaurant with the minimum index sum when adding the indices of the restaurant on both of their lists together. If multiple restaurants have the same highest score, output all of them.
Examples

Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Input:
nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
marysChoices = ["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: They both have "Shogun" on their preferred list and it has the highest preference score with an index sum of 1 (0+1). They both listed "KFC" but it has a lower preference score because the index sum is 3 (0+3). Likewise, "Burger King" has a preference score of 4 (2+2).

Input:
nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]
Output: ["Guppy House", "In-n-Out"]
Explanation: They both have "Guppy House" and "In-n-Out" on their preferred list and both restaurants have the same highest total preference score with an index sum of 1 (0+1 and 1+0). They both listed "Dairy Queen" but the preference score is 4 (2+2).


nedsChoices = ["Guppy House", "Dairy Queen", "In-n-Out"]
marysChoices = ["In-n-Out", "Dairy Queen", "Guppy House"]
guppy house = 2
in n out = 2
dairy queen = 2
-> [guppy house, in n out, dairy queen]


Function Signature
def findCompatibleRestaurants(ned: list[str], mary: list[str]):

Notes:
- Set: Iterating through both choices at the same time, and storing in the set. 
- Hashmap: Look for matching strings in the 2 arrays. If they match, then add it as either the key or value, and it's opposite (key or value) is going to be the index weight. Go through the hashmap and look for the maximal value. if the value matches, we add the corresponding string to our output array and return that output array.

- The score matters

Approach:
- Rank each of the possible options
  - Create a results array.
  - Create a priority variable.
  - Create a hashmap.
  - Iterate through one of the the arrays and put them into the hashmap where key is the option and value is the index
  - Iterate through the other array and see if it exists in the hashmap. 
  - If it does, sum up the current index and the value in the hashmap and compare it to the current "highest" priority option. 
    - If the priorities are the same, add the option to the result. 
    - If it's lower, set the result to the current option. 
    - If it's higher, ignore it.

- Get the highest scored options
  - Return results array
**/

function findCompatibleRestaurantsBetween(nedsChoices, marysChoices) {
    // TODO: impl
    let results = [];
    let priority = Infinity;
    let map = {};
  
    for (let i = 0; i < nedsChoices.length; i++) {
      map[nedsChoices[i]] = i;
    }
  
    for (let i = 0; i < marysChoices.length; i++) {
      if (map[marysChoices[i]] !== undefined) {
        if (map[marysChoices[i]] + i < priority) {
          priority = map[marysChoices[i]] + i
          results = [marysChoices[i]]
        } else if (map[marysChoices[i]] + i == priority) {
          results.push(marysChoices[i])
        }
      }
    }
  
    return results
  }
  
  // Test cases:
  let nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
  let marysChoices = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices))
    === JSON.stringify(["Shogun"]))
  
  nedsChoices = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
  marysChoices = ["KFC", "Shogun", "Burger King"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices))
    === JSON.stringify(["Shogun"]))
  
  nedsChoices = ["Guppy House", "In-n-Out", "Dairy Queen"]
  marysChoices = ["In-n-Out", "Guppy House", "Dairy Queen"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices).sort())
    === JSON.stringify(["Guppy House", "In-n-Out"].sort()))
  
  nedsChoices = ["Olive Garden", "Outback Steakhouse", "Red Lobster"]
  marysChoices = ["Olive Garden", "Outback Steakhouse", "Red Lobster"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices))
    === JSON.stringify(["Olive Garden"]))
  
  nedsChoices = ["Hometown Buffet", "Olive Garden", "Red Lobster"]
  marysChoices = ["Panda Express", "Denny's", "Red Lobster"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices))
    === JSON.stringify(["Red Lobster"]))
  
  nedsChoices = ["Costco Food Court"]
  marysChoices = ["Costco Food Court"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices))
    === JSON.stringify(["Costco Food Court"]))
  
  nedsChoices = ["Costco Food Court", "Saigon Deli", "Med Mix"]
  marysChoices = ["Med Mix", "Saigon Deli", "Costco Food Court"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices).sort())
    === JSON.stringify(["Saigon Deli", "Costco Food Court", "Med Mix"].sort()))
  
  nedsChoices = ["Costco Food Court"]
  marysChoices = ["Med Mix", "Saigon Deli", "Costco Food Court"]
  console.log(JSON.stringify(findCompatibleRestaurantsBetween(nedsChoices, marysChoices))
    === JSON.stringify(["Costco Food Court"]))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /**
  3 Levels to Algorithm Mastery
  
  1. Understanding the Base Algorithm
      - Sort problems by topic
      - Sort by difficult, easy -> hard
      - Grind out the easy questions and try to understand them as much as you can.
      - Look at the discussion/solution to get clarity if stuck.
  
  2. Identifying Algorithm in Questions
      - For every question you do in the above section, go to the left tab and look at the "Similar Questions" section.
      - Do every question within 1-level-higher of the similar questions.
      - Really look at the question, and try and find hints to affirm that the algorithm you used previously applies to this question.
  
  3. Modifying Algorithm for Specific Questions
      - As you do the above questions, solve the question utilizing your previous solution and change the pieces that need to be changed.
      - Recommend NOT looking at the solution/discussion until you feel like you're at the point of (mental/emotional) failure
  
  Study Guide:
  - Copy/Paste the Question and Implementation
  - Write a paragraph summary in human-readable format explaining the solution
  
  * Keep track of the questions that you didn't do well on
      - Come back to that question a week later
  
  A week before any of your big interviews, allocate time to do questions filtered by company/frequency
      - These will have questions you'll most likely get
      - You should be more comfortable around questions like this, that you haven't seen before
      - And you'll get more exposure around those questions
      - NOTE: I got a shit ton of those most-frequent questions in my interviews
   *
   **/
  
  
  // unsorted unrelated problem but its a linked list
  function h(head) {
    if (head === null)
      return null
  
    const s = new ListNode(0, head)
  
    c(s, head, head.next)
  
    return s.next
  }
  // s->2->1
  // d null
  // f(1,null,undefined) -> error
  // f(null)
  function c(prev, first, second) {
    if (second === null)
      return
  
    prev.next = second
    const detached = second.next
    second.next = first
  
    c(first, detached, detached.next)
  }
  