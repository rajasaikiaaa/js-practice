//using map method creating a new array where only the first character of each elements in the array are stored.

const array = ['Proident', 'consequat', 'nisi','labore', 'euLaboris', 'culpa', 'dolore', 'occaecat', 'voluptate', 'anim', 'cillum', 'aute', 'veniam', 'cupidatat', 'veniam', 'occaecat'];
const newArray = array.map(element => {
    return element[0];
})
console.log(newArray.join(''));