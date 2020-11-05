'use strict';

//function takes in two strings of usernames (sender and recipient) and an graph that represents the network(using an adjacency list - object where users are key and neighbors are the values in adjacency lists (arrays))

//it returns an array of usernames to represent the route from sender to recipient

function meshMessage(sender, recipient, network) {
  let route = [];
  let visited = new Set();
  let queue = [];
  // route.push(sender);
  queue.push(sender);
  visited.add(sender);

  while(queue.length > 0) {
    let node = queue.shift();
    route.push(node);
    if (node === recipient) {
      return route;
    }

    for (let neighbor of network[node]) {
      if (neighbor === recipient) {
        route.push(neighbor);
        return route;
      }
      if(!visited.has(neighbor)) {
        // route.push(neighbor);
        queue.push(neighbor);
        visited.add(neighbor);
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
  
