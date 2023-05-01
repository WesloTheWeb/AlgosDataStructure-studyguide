/*
Suppose you are given an edge list of a DAG. This edge list contains int. tuples of the format.

(node1, node2)

Every node has a unique int associated with it. node1 is a parent node and node2 is a child node.

Return a list of the nodes N levels above a sink in ascending order.

Example
     1 
    / \
   2  3    6
    \/ \    \
    4   5    7

solution(edge_list, 1) -> [2, 3, 6]
Explanation: The sinks are 4, 5, and 7. The nodes 1 level above are 2, 3, and 6

solution(edge_list, 2) -> [1]
Explanation: The sinks are 4, 5, and 7. Nodes 4 and 5 both have Node 1 two levels above. 
Node 7 has zero nodes two levels above

solution(edge_list, 3) -> []
Explanation: There are no nodes 3 levels above the sinks
*/

function solution(edge_list, n) {

}

const convertToEdgeList = edgeList => {
    // create
    const createdEdgeList = new Map();

    // iterate edgelist to map
    for (let node of edgeList) {
        if (!createdEdgeList.has(node)) {
            createdEdgeList.set(node, []);
        }

    };

    return createdEdgeList;
}