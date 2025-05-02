const numbers = [ 1,2,3,4,5,6,7,8,9,10];

const bigNumbers = numbers.map(number => {
    return number * 256;
});

console.log(bigNumbers);


const numName = numbers.map(element => {
    return 'Hello, I am ' + element;
});

console.log(numName);