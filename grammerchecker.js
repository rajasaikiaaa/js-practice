let story = 'Last  weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';
let storyWords = story.split(' ');
let unnecassaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';


//console.log(storyWords); 
let count = 0;
storyWords.forEach((word)=> {
count++;
});
//console.log(storyWords.join(' '));
console.log(count);

storyWords = storyWords.filter( (word) => {
    return word !== 'literally';
}

);

//console.log(storyWords.join(' '));

storyWords = storyWords.map((word) => {
    return word === misspelledWord ? 'beautiful' : word;
});



let badWordIndex = storyWords.findIndex(
    word =>{
        return word === badWord;
    }
);
console.log(badWordIndex);

storyWords[79] = 'really';
console.log(storyWords.join(' '));





storyWords.forEach((word) => {
    return word.length > 10 && console.log(word);
}
);

let lengthCheck = storyWords.every(word =>{
    return word < 10;
}
    
);
console.log(lengthCheck);


let index = storyWords.findIndex( (word) => {
    return word === 'breathtaking';
}
);
console.log(index);
storyWords[112] = 'stunning';

console.log(storyWords.join(' '));