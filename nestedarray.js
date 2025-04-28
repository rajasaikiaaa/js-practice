const nestedArray = [[1,2,3],[4,5,6],[7,8,9]];
console.log(nestedArray[1]); // we can call the nested array with indexing 

//we can also call the elements within the nested elements by chaining 

console.log(nestedArray[1][2]); // here we know the index1 gives the output [4,5,6], and chaining [2] gives the output 6 as it has the index of 2.

const target = nestedArray[2][1]; //targeting the number 8 element within the nested array.
console.log(target);