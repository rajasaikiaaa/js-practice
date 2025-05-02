const array = ['Banana','Pineapple','Jackfruit','Watermelon','Apple','Avocado'];
console.log(array);

/**function addline(element){
    console.log('I want to eat a ' + element);
}**/

//above function in arrow function syntax
array.forEach(element =>
    console.log('I want to eat a ' + element));

//array.forEach(addline);

/**function givesName(element){
    console.log(element);
}**/

//above function in arrow function syntax
array.forEach(element=>
    console.log(element));



//array.forEach(givesName);


