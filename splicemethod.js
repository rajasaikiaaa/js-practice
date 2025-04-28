const array = ['Banana','Pineapple','Jackfruit','Watermelon','Apple','Avocado'];
console.log(array);
array.splice(3, 0, "Papaya"); //1st targeting the index of the element, then how many elements you want to remove, 0 means non. simply add at the given index
console.log(array);


array.splice(2, 1, "Pear"); // replacing the element in the index
console.log(array);