const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard ;
while (currentCard !== 'club'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log('The current Card is ' + currentCard);
}



const ludo = [1, 2, 3, 4, 5, 6]
let num;

while (num !== 6){
    num = ludo[Math.floor(Math.random() * 6)];
    console.log('The number is ' + num);
}


const count = () => {
    let x = 0;
    while (x <=10){
        console.log(x);
        x++;
    }
    
}

count();

