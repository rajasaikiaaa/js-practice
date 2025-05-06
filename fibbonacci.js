 /**function printFibonacciSequence() {
    let a = 0, b = 1;
    let count = 0;
    
    // To prevent infinite loop, we'll stop after 20 numbers
    while (count < 18) {
        const next = a + b;
        console.log(next);
        a = b;
        b = next;
        count++;
    }
}

printFibonacciSequence();**/






let a = 0;
let b = 1;
let count = 0;

while (count < 1476){
    let c = a + b;
    console.log(`'Your fibonacci Number ${count}  is ' + ${c}`);
    a = b;
    b = c;
    count++;
};