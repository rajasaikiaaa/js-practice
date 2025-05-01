/**const callback = () => {
    for (i=0; i<=10; i++){
        console.log(i);
    }
}

const count20 = () =>{
    for (j=1; j<=20; j++){
        console.log(j)
    }
}


const highOrderFunc = func =>{
    callback();
    count20();
    return 'count function has been executed';
}

highOrderFunc();**/



//functions as parameters

/**const higherOrderFunc =( () => {
    for (i=40; i <=50; i++){
        console.log(i);
    }
}
)

higherOrderFunc();**/



//check two numbers are equal or not.

const addTwo = num =>{
    return num + 10;
}

const addThree = num =>{
    return num + 3;
}

const checkTwoNum = (func, val) =>{
    let checkA = val + 10;
    let checkB = func(val);
    return checkA === checkB ? func(val) : 'not equal';
}

console.log(checkTwoNum(addThree,1));
console.log(checkTwoNum(addTwo,20));