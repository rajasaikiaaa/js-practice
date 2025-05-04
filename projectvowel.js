const fruits = [
    "Apple", "Annas", "Banana", "Orange", "Grapes", "Mango", "Strawberry", "Pineapple", "Watermelon", "Kiwi", "Cherry",
    "Blueberry", "Raspberry", "Peach", "Pear", "Plum", "Apricot", "Cranberry", "Pomegranate", "Fig", "Date",
    "Grapefruit", "Lemon", "Lime", "Avocado", "Coconut", "Blackberry", "Melon", "Cantaloupe", "Honeydew", "Papaya",
    "Guava", "Passion Fruit", "Tangerine", "Nectarine", "Lychee", "Dragon Fruit", "Rambutan", "Mangosteen", "Durian", "Longan",
    "Star Fruit", "Quince", "Ugli Fruit", "Clementine", "Blood Orange", "Buddha's Hand", "Cherimoya", "Damson", "Elderberry", "Feijoa",
    "Gooseberry", "Hackberry", "Imbe", "Jackfruit", "Jujube", "Kumquat", "Loquat", "Miracle Fruit", "Nance", "Olive",
    "Persimmon", "Salak", "Soursop", "Tamarind", "Yuzu", "Ackee", "Breadfruit", "Cacao", "Canistel", "Cloudberry",
    "Currant", "Genip", "Hala Fruit", "Jabuticaba", "Kiwano", "Langsat", "Mamey Sapote", "Medlar", "Mulberry", "Noni",
    "Santol", "Sapote", "Sugar Apple", "Surinam Cherry", "Ube", "Vanilla Bean", "White Sapote", "Ximenia", "Yangmei", "Ziziphus",
    "Limequat", "Pomelo", "Seville Orange", "Valencia Orange", "Mandarin Orange", "Bergamot Orange", "Key Lime", "Kaffir Lime"];
  
  //console.log(fruits.join(','));


  let vowel = ['A','E','I','O','U'];


  let newFruits = fruits.map(word => {
    if(word.charAt(0) === vowel){
        return 'An ' + word;
    } return 'A ' + word;
  });

  console.log(newFruits);

  /**for(let i = 0; i <fruits.length; i++ ){
    for(let j = 0; j < vowel.length; j++){
            if(fruits[i][0] === vowel[j]){
                return console.log('An ' + fruits[i]);
                }
            
            
            if(fruits[i][0] !== vowel[j]){
                return console.log('A ' + fruits[i]);
            }
        }
        };**/

/**let newFruits = fruits.map( word => {
    return 'My Name is ' + word + '. I am a fruit';
}
)
console.log(newFruits.join(' '));


let num = [1,2,3,4,5,6,7,8,9];
let newNum = num.map( num => {
    return num *1000;
});

console.log(newNum);

let newNum1 = num.filter(num => {
    return num > 6;
});
console.log(newNum1);**/