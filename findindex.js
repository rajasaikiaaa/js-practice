//finding index number of elephant element in the array.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(element => {
  return element === 'elephant';
  }
);
//finding index of the first elements that starts with 's'.
const startsWithS = animals.findIndex(element => {
  return element[0] === 's';
});

console.log(foundAnimal);
console.log(startsWithS);


console.log(animals[7]);
console.log(animals[3]);