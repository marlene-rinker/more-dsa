'use strict';

let GraphNode = require('../../constructors/graph-node.js');
let colorGraph = require('./graph-coloring.js');

describe('Testing coloring graph nodes with legal coloring', () => {
  it ('should color the nodes in the graph with legal coloring', () => {    
    let a = new GraphNode('a');
    let b = new GraphNode('b');
    let c = new GraphNode('c');

    a.neighbors.add(b);
    b.neighbors.add(a);
    c.neighbors.add(b);
    b.neighbors.add(c);
    c.neighbors.add(a);

    let graph = [a, b, c];
    let colors = ['red', 'green', 'blue', 'purple'];

    expect(colorGraph(graph, colors)).toEqual('Graph has legal coloring.');
    })

    it ('should not be able to color the nodes of the graph with legal coloring', () => {   
      
      let a = new GraphNode('a');
      let b = new GraphNode('b');
      let c = new GraphNode('c');

      a.neighbors.add(b);
      b.neighbors.add(a);
      c.neighbors.add(b);
      b.neighbors.add(c);
      c.neighbors.add(a);
      c.neighbors.add(c);

      let graph = [a, b, c];
      let colors = ['red', 'green', 'blue', 'purple'];

      expect(colorGraph(graph, colors)).toEqual('Legal coloring is not possible because node c is in a loop.');
      
      })

  });