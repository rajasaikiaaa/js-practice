const array = 'Hi my name is Raja Saikia. I am learning JavaScript.';

let newArray = array.split(' ');

let count = 0;
newArray.forEach(word => {
  count++;
});

console.log(count);

let newArray1 = newArray.filter(word => {
  return word.length <= 2;
});



newArray1.push("Hello World");
console.log(newArray1);