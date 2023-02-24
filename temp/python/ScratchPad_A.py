# Python Scratchpad
def to_adj_list(vertex_list, edge_list):
    output = {}
    for v in vertex_list:
        output[v] = []
    for frm, to in edge_list:
        output[frm].append(to)
    return output

'''
def solution(vertex_list, edge_list):
    adj_list = to_adj_list(vertex_list, edge_list)
    visited = set()
    def dfs(curr_node):
        if curr_node in visited:
            return
        visited.add(curr_node)
        for neighbor in adj_list[curr_node]:
            dfs(neighbor)
    dfs(elem[0] for elem in adj_list.keys())
'''

def dfs(adjacency_list):
    visited = set()

    def dfs_helper(curr_node):
        visited.add(curr_node)
        print(curr_node)
        neighbors = adjacency_list.get(curr_node)
        # Base Case: No more neighbors
        if neighbors is None or len(neighbors) == 0:
            print("DONE")
            return
        # Recursive Case: iterate over neighbors and recurse
        for neighbor_node in neighbors:
            if neighbor_node in visited:
                continue
            dfs_helper(neighbor_node)

    for node in adjacency_list.keys():
        if node not in visited:
            dfs_helper(node)
    print("Visited set after DFS: " + str(visited))

vertices = ["A", "B", "C", "D", "E"]
edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "C"],
    ["B", "D"],
    ["C", "D"],
    ["D", "E"],
]
"""
           A 
         /   \
        B  -  C
         \   /
           D
            \
             E
"""
print(to_adj_list(vertices, edges))
print(dfs(to_adj_list(vertices, edges)))


vertex_list = [
    "Prepare kitchen", "Mix flour", "Mix wet ingredients", "Combine", "Put in oven", "Clean kitchen"
]
edge_list = [
    ("Prepare kitchen", "Mix wet ingredients"),
    ("Prepare kitchen", "Mix flour"),
    ("Mix flour", "Combine"),
    ("Mix wet ingredients", "Combine"),
    ("Combine", "Put in oven"),
    ("Combine", "Clean kitchen"),
]

"""
# Prepare Kitchen, Mix Wet Ingredients, Mix Flour, Combine, Clean Kitchen, Put In oven

- check if node is a source -> we have to start search at a source
    - node is a source if:
- start with a source to do DFS
- 
"""

def get_sources(adj_list):
    possible_sources = set(adj_list.keys())
    for neighbors in adj_list.values():
        # if a node has an in-edge, then it can't
        # be a source
        for node in neighbors:
            if node in possible_sources:
                possible_sources.remove(node)
    return possible_sources

print(get_sources(to_adj_list(vertices, edges)))

def brute_force(adj_list):
    sources = get_sources(adj_list)
    output = []
    while len(sources) > 0:
        output.extend(sources)
        for s in sources:
            del adj_list[s]
        sources = get_sources(adj_list)
    return output

print(brute_force(to_adj_list(vertex_list, edge_list)))

def topo_sort(adjacency_list):
    stack = []
    visited = set()
    def dfs(curr_node):
        if curr_node in visited:
            return
        visited.add(curr_node)
        for neighbor in adjacency_list[curr_node]:
            dfs(neighbor)
        stack.append(curr_node)
    for node in adjacency_list.keys():
        if node not in visited:
            dfs(node)
    
    return list(reversed(stack))

print(topo_sort(to_adj_list(vertex_list, edge_list)))
