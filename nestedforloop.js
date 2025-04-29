//comparing to arrays using nested for loop

const array1 = [1,2,3,4,5,6,7,8,9,11,22,34,54,76,98,23,12,87,89,'raja'];
const array2 = [1,23,34,45,65,67,7,54,6,53,45,47,68,87,22,89,'raja'];
const commonnum = [];
for (i = 0; i < array1.length; i++){
    for (j = 0; j < array2.length; j++){
        if ( array1[i] === array2[j]){
            commonnum.push(array2[j]);
        }
    }
}
console.log(commonnum);