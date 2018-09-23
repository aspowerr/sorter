
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
    
    for (q = 0, endQ = indices.length - 1; q < endQ; q++)
    {
      for(w = 0, endW = indices.length - q; w < endW; w++)
      {
        if(indices[w] > indices[w+1])
          {
            var swap = indices[w];

            indices[w] = indices[w+1];
            indices[w+1] = swap;

          }
      }
    }

    for(let j=0; j<indices.length; j++)
    {
      new_array[j] = array[indices[j]];
    }

    for (q = 0, endQ = new_array.length - 1; q < endQ; q++)
    {
      for(w = 0, endW = new_array.length - q; w < endW; w++)
      {
        if(new_array[w] > new_array[w+1])
          {
            var swap = new_array[w];

            new_array[w] = new_array[w+1];
            new_array[w+1] = swap;

          }
      }
    }

    w=0;
    for(q=0; q<indices.length; q++)
    {
        array[indices[q]]=new_array[w];
        w++;
    }

  return array;
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;