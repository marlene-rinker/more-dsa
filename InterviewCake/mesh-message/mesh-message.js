'use strict';

//function takes in two strings of usernames (sender and recipient) and an graph that represents the network(using an adjacency list - object where users are key and neighbors are the values in adjacency lists (arrays))

//it returns an array of usernames to represent the route from sender to recipient



function meshMessage(sender, recipient, network) {
  let route = [];
  let visited = {};
  let queue = [];
  
  if (!network[sender] || !network[recipient]) {
    return route;
  }
  
  queue.push(sender);
  visited[sender] = null;

  while(queue.length) {
    let node = queue.shift();
    
    if (node === recipient) {
      let currentNode = node;
      while(currentNode !== null) {
        route.push(currentNode);
        currentNode = visited[currentNode];
      }
      route = route.reverse();
      return route;
    }

    for (let neighbor of network[node]) {
      if (!visited.hasOwnProperty(neighbor)) {
        queue.push(neighbor);
        visited[neighbor] = node;
      }
      
    }
  }
  return route;

}

module.exports = meshMessage;

let network = {
  'Marlene': ['Dave', 'Paul', 'Gloria'],
  'Dave': ['Marlene', 'James', 'Gloria'],
  'Paul': ['Marlene', 'Nora', 'Maisie'],
  'Gloria': ['Marlene', 'Dave', 'Maisie'],
  'Maisie': ['Paul', 'Gloria'],
  'Nora': ['Paul'],
  'James': ['Dave'],
}

console.log(meshMessage('James', 'Nora', network));
console.log(meshMessage('Dave', 'Marlene', network));
console.log(meshMessage('Marlene', 'Maisie', network));
  
