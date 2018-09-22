
var array = [];
var i=0;

class Sorter {
  constructor() {
    // your implementation
    array = [];
    i=0;
  }

  add(element) {
      array[i]=element;
    i++;
  }

  at(index) {
    // your implementation
    return array[index];
  }

  get length() {
    // your implementation
    return array.length;
  }

  toArray() {
    // your implementation
    return array;
  }

  sort(indices) {
    // your implementation
    let q, endQ, endW, w;

    let new_array = [];
    for(let j=0; j<indices.length; j++)
    {
    new_array[j] = array[indices[j]];
    }

    for (q = 0, endQ = new_array.length - 1; q < endQ; q++)
    {
      let wasSwap = false;

      for(w = 0, endW = endW - q; w < endW; w++)
      {
        if(new_array[w] > new_array[w+1]) {
          [new_array[w], new_array[w+1]] = [new_array[w+1], new_array[w]];
          wasSwap = true;
        }
        if(!wasSwap) break;
      }
      return new_array;
    }
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;