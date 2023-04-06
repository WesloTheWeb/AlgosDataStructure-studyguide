 /* QUESTION
Suppose you are given an edge list of all the members of a social network. This edge list contains tuples of the format.

(friend1, friend2)

All users of this social network exist in at least one tuple of this edge list. All users have a unique name.
Return a boolean of whether two users are 2nd degree friends.

Example
User1--User2
 |     |
User3--User4---User5
 |_______________|

solution(edge_list, 'User1', 'User2') -> false
solution(edge_list, 'User1', 'User5') -> true 
 
 
 Approach
- create adjacency list.
- loop through and check if two users are 2nd degree friends.

need to log what I have

TODO: I need to really get these edge cases down. Making same mistake as last week
*/

function solution(edge_list, user1, user2) {
    const graph = buildAdjacencyList(edge_list);
    
    // check common friends
    for (let friend of graph.get(user1)) {
        if (graph.get(user2).includes(friend)) {
            return true;
        }
    };
    
    // mutual iterate
        for (let common_friend of graph.get(user1)) {
        if (graph.get(user2).includes(common_friend)) {
            return true;
        }
    };
    
    
    return false;
};

const buildAdjacencyList = (edge_list) => {
    const adjacencyList = new Map();
    
    // for loop to fill --> key: [] checks
    for (let [node1, node2] of edge_list) {
        if (!adjacencyList.has(node1)) {
            adjacencyList.set(node1, []);
        }; 
        // do the inverse
        if (!adjacencyList.has(node2)) {
            adjacencyList.set(node2, []);
        };
        
        adjacencyList.get(node1).push(node2);
        adjacencyList.get(node2).push(node1);        
    }
    
    return adjacencyList;
};

/* TEST CASES

TEST CASE #1
Input:
edge_list:
[["Jeff","Fred"], 
 ["Fred","Sara"]]
user1: "Jeff"
user2: "Fred"
Output:
false

TEST CASE #2
Input:
edge_list:
[["Jeff","Fred"], 
 ["Fred","Sara"]]
user1: "Jeff"
user2: "Sara"
Output:
true

TEST CASE #3
Input:
edge_list:
[["Jeff","Fred"], 
 ["Sara","Fred"]]
user1: "Jeff"
user2: "Sara"
Output:
true

TEST CASE #4
Input:
edge_list:
[["Me","You"], 
 ["You","YourFriend"]]
user1: "Me"
user2: "YourFriend"
Output:
true

TEST CASE #5
Input:
edge_list:
[["Me","You"], 
 ["YourFriend","You"]]
user1: "Me"
user2: "YourFriend"
Output:
true

TEST CASE #6 (this didn't pass)
Input:
edge_list:
[["ab","cd"], 
 ["ef","gh"]]
user1: "ab"
user2: "ab"
Output:
true
Expected Output:
false

TEST CASE #7 
Input:
edge_list:
[["User1","User2"], 
 ["User1","User3"], 
 ["User2","User4"], 
 ["User4","User5"], 
 ["User3","User5"]]
user1: "User1"
user2: "User2"
Expected Output:
false

TEST CASE #8
Input:
edge_list:
[["User1","User2"], 
 ["User1","User3"], 
 ["User2","User4"], 
 ["User4","User5"], 
 ["User3","User5"]]
user1: "User1"
user2: "User5"
Expected Output:
true

TEST CASE #9
Input:
edge_list:
[["0","763"], 
 ["0","797"], 
 ["0","366"], 
 ["0","165"], 
 ["0","637"], 
 ["1","329"], 
 ["1","83"], 
 ["1","629"], 
 ["2","256"], 
 ["2","301"], 
 ["2","362"], 
 ["2","20"], 
 ["2","401"], 
 ["3","173"], 
 ["3","52"], 
 ["4","582"], 
 ["4","733"], 
 ["4","656"], 
 ["5","643"], 
 ["5","943"], 
 ["5","600"], 
 ["6","415"], 
 ["6","883"], 
 ["6","496"], 
 ["6","746"], 
 ["7","704"], 
 ["7","392"], 
 ["7","772"], 
 ["7","499"], 
 ["8","67"], 
 ["8","522"], 
 ["9","979"], 
 ["9","307"], 
 ["9","788"], 
 ["9","698"], 
 ["9","847"], 
 ["10","617"], 
 ["10","208"], 
 ["11","145"], 
 ["12","572"], 
 ["12","545"], 
 ["12","699"], 
 ["13","581"], 
 ["13","146"], 
 ["14","313"], 
 ["14","34"], 
 ["15","178"], 
 ["16","847"], 
 ["16","966"], 
 ["16","919"], 
 ...]  (too large and truncated)
user1: "998"
user2: "50"
Expected Output:
true

TEST CASE #10 (this didn't pass)
Input:
edge_list:
[["V8|","+kA"], 
 ["D1/","Eug"], 
 ["Vo5","0:g"], 
 ["~WO","dv}"], 
 ["4EC","0\\g"], 
 ["nBy","v\tA"], 
 ["guv","5Ad"], 
 ["?r ",".P_"], 
 ["06G","Vs8"], 
 ["U0;","ji#"], 
 ["]m)","25:"], 
 ["]i~","=up"], 
 ["c5T","1`P"], 
 ["N1W","I\tY"], 
 ["\\-N","V`B"], 
 ["UMq","?.S"], 
 ["VH@","Pi\\"], 
 ["{E(",")o2"], 
 ["6IJ","0iP"], 
 ["qXW","%tr"], 
 ["{D0","wAY"], 
 ["Yr ","r[k"], 
 ["2|(","u{q"], 
 ["s-M","r6\t"], 
 ["y M","@L="], 
 ["MKj","g|5"], 
 ["c9 ","si,"], 
 ["^C(","_6V"], 
 ["(&x","\\&>"], 
 ["-;Q","~RK"], 
 ["I*5",",Xd"], 
 ["RIR","+}O"], 
 ["]G&","pa?"], 
 ["7Z9","z-,"], 
 ["5M+","3>@"], 
 [",*D","=\t6"], 
 ["iH7","0\\r"], 
 [";D8","4hl"], 
 ["i$n","r%a"], 
 ["m*>","9V4"], 
 ["Z+6",".Iv"], 
 ["oWA","u->"], 
 ["eed","jaF"], 
 ["!s{","!OB"], 
 ["I~j","\\}$"], 
 ["8cC","$Fx"], 
 ["W~0","f08"], 
 ["~0e","=<R"], 
 ["8H;","D+H"], 
 ["B`/","ogt"], 
 ...]
user1: "]<Zns"
user2: "e!b$x"
Expected Output:
false

TEST CASE #11
Input:
edge_list:
[["0","763"], 
 ["0","797"], 
 ["0","366"], 
 ["0","165"], 
 ["0","637"], 
 ["1","329"], 
 ["1","83"], 
 ["1","629"], 
 ["2","256"], 
 ["2","301"], 
 ["2","362"], 
 ["2","20"], 
 ["2","401"], 
 ["3","173"], 
 ["3","52"], 
 ["4","582"], 
 ["4","733"], 
 ["4","656"], 
 ["5","643"], 
 ["5","943"], 
 ["5","600"], 
 ["6","415"], 
 ["6","883"], 
 ["6","496"], 
 ["6","746"], 
 ["7","704"], 
 ["7","392"], 
 ["7","772"], 
 ["7","499"], 
 ["8","67"], 
 ["8","522"], 
 ["9","979"], 
 ["9","307"], 
 ["9","788"], 
 ["9","698"], 
 ["9","847"], 
 ["10","617"], 
 ["10","208"], 
 ["11","145"], 
 ["12","572"], 
 ["12","545"], 
 ["12","699"], 
 ["13","581"], 
 ["13","146"], 
 ["14","313"], 
 ["14","34"], 
 ["15","178"], 
 ["16","847"], 
 ["16","966"], 
 ["16","919"], 
 ...]
user1: "998"
user2: "998"
Expected Output:
false

*/
