/*
Solution:

Noor:
function mapOfDestinations (flights, homeCity, destinations, map) {
  // loop through destinations and set up a map initiated with 0 flights
  if (!flights[homeCity].length) {
    return;
  } else {
    let destination = flights[homeCity];
    map[destination] = map[destination] + 1;
    return mapOfDestinations(flights, homeCity, destinations, map)
  }
}

Anthony's:
- Create a set of visited cities
- Create a map of destination count. Map<string, int>
Recursive approach
- Starting from home city in flight table, update city in visited cities,
  then recursively iterate through reachable cities,
  incrementing until destination is reached,
  then we update destination flight count with minimum of current count and map count - Math.min
- Return destination flight count 

BFS vs. DFS
* Does it matter here?
  - BFS: the node you're currently at was reached in the shortest path (least num of edges)

Mohammad
- BFS from home to destination 
*/

/*

We want to take a vacation and are looking at tables of flight schedules and comparing them against our list of desired destinations.
The schedule displays the flight tables as a map of city names as keys and a list of city names reachable via a direct flight as the values. For example:

Flight Table:
{
  'Phoenix': [], // dead-end
  'Seattle': ['Phoenix', 'Boston'], // can fly to 'Phoenix' and 'Boston'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}
Home City: Seattle
List(array) of destinations: ['Boston']
{
  'Boston': 1
}

{
  'Phoenix': ['Boston'], 
  'Seattle': ['Phoenix'], // can fly to 'Phoenix'
  'Boston': ['Phoenix']  // can only fly to 'Phoenix'
}
Home City: Seattle
List(array) of destinations: ['Boston']
{
  'Boston': 2
}

Given a flight table, a home city, and a list (array) of destinations, return a new map indicating the number of flights needed for each destination. If a destination is not reachable, do not include it in the output.

Can destination = home city? No.
Leave an unreachable destination out of the output.

Example:
*/

console.log(possibleVacations({'Phoenix': ['Seattle'], 'Seattle':[]}, 'Phoenix', ['Seattle'])); // returns {'Seattle': 1}
console.log(possibleVacations({'Phoenix': [], 'Seattle':[]}, 'Phoenix', ['Seattle'])); // returns {}
console.log(possibleVacations({'Phoenix': ['Seattle'], 'Seattle':['Boston', 'Phoenix'], 'Boston': ['Phoenix']}, 'Phoenix', ['Seattle', 'Boston'])); // returns {'Seattle': 1, 'Boston': 2}

