'use strict';

let GraphNode = require('../../constructors/graph-node.js');

//colors should be an array of D+1 colors where D is the graph's maximum degree - a degree is the number of edges connected to a node; the maximum is the highest number of edges connected to one of the nodes in the graph

function colorGraph(graph, colors) {

  for(let node of graph) {
    let neighbors = node.neighbors;

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
   
    for (let color of colors) {
      if(!neighborColors.has(color)) {
        node.color = color;
        break;
      }     
    }
  };

  return 'Graph has legal coloring.'

};

module.exports = colorGraph;