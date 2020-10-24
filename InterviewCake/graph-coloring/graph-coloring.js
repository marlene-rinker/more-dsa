'use strict';

let GraphNode = require('../../constructors/graph-node.js');

//colors should be an array of D+1 colors where D is the graph's maximum degree - a degree is the number of edges connected to a node; the maximum is the highest number of edges connected to one of the nodes in the graph

function colorGraph(graph, colors) {

  graph.forEach(node => {

    let neighbors = node.neighbors;
    console.log(neighbors);
    console.log(node);

    //if a node is in a loop, it can't have legal coloring
    if(neighbors.has(node)) {
      return `Legal coloring is not possible because node ${node.label} is in a loop.`
    }

    let neighborColors = new Set();

    neighbors.forEach(neighbor => {
      if(neighbor.color !== null) {
        neighborColors.add(neighbor.color)
      }
    })

    for (let i = 0; i < colors.length; i++) {
      let color = colors[i];

      if(!neighborColors.has(color)) {
        node.color = color;
        break;
      }
      
    }
  

  });

  return 'Graph has legal coloring.'


}

module.exports = colorGraph;

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);
b.neighbors.add(b);

let graph = [a, b, c];
let colors = ['red', 'green', 'blue', 'purple'];

console.log(colorGraph(graph, colors));