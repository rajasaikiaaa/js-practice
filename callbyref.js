const array = ['Banana','Pineapple','Jackfruit','Watermelon','Apple','Avocado'];
console.log(array);

function addArr(arr){ //function to add element with push method.
    arr.push('Mango');
}
addArr(array); //calling the function with argument 'array'
console.log(array);



const array1 = ['Banana','Pineapple','Jackfruit','Watermelon','Apple','Avocado'];
console.log(array1);

function removeArr(newArr){
    newArr.pop(); //removes the last element of the array1
}
removeArr(array1);  //executes the function to the array1
console.log(array1);