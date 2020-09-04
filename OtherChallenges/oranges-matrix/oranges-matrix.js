'use strict';

function rotOranges(mtx) {


  let numRows = mtx.length;
  let numCols = mtx[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  let rotten = [];
  let fresh = 0;
  let minutes = 0;


  for(let r = 0; r < numRows; r++) {
    for(let c =0; c< numCols; c++) {
      if(mtx[r][c] === 2) {
        rotten.push([r, c]);
      }
      if(mtx[r][c] === 1) {
        fresh++;
      }
    }
  }

  while (rotten.length && fresh > 0) {
    let len = rotten.length;
      for(let q = 0; q < len; q++) {
        let orange = rotten.shift();

        for(let d = 0; d < directions.length; d++) {
          let dir = directions[d];
          let row = orange[0] + dir[0];
          let col = orange[1] + dir[1];

          if (row >= 0 && row < numRows && col >=0 && col < numCols && mtx[row][col] === 1)  {
            mtx[row][col] = 2;
            fresh--;
            rotten.push([row, col]);
          };        
        }
      }
    minutes++;
  }  

  if (fresh > 0) {
    return -1;
  }

  return minutes;  
}


module.exports = rotOranges;