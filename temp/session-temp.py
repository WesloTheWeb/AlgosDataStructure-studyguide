## TODO: Graph session to fix tutorial

graph = {
  'A' : ['B','C'],
  'B' : ['D', 'E'],
  'C' : ['F'],
  'D' : [],
  'E' : ['F'],
  'F' : []
}

# visited = set() # Set to keep track of visited nodes.

# def dfs(visited, graph, node):
#     if node not in visited:
#         print(node, end = " ")
#         visited.add(node)
#         for neighbor in graph[node]:
#             dfs(visited, graph, neighbor)

# dfs(visited, graph, 'A')

# print("-------")

visited = set() # Set to keep track of visited nodes.
queue = []     #Initialize a queue

def bfs(visited, graph, node):
  visited.add(node)
  queue.append(node)

  while queue:
    print(queue)
    s = queue.pop(0) 
    print (s, end = " ") 

    for neighbor in graph[s]:
      if neighbor not in visited:
        visited.add(neighbor)
        queue.append(neighbor)

bfs(visited, graph, 'A')


#       A
    BaseException