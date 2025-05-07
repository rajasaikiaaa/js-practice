//understanding the use of 'this' keyword 
/**const aeroplane = {
    ['Fuel Type']: 'Octane',
    model: 'Flt747',
    capacity: 500,
    start() {
        console.log('brummmmmmm');
    }
};
aeroplane.start();**/

//now let's add a new method
/**const aeroplane = {
    ['Fuel Type']: 'Octane',
    model: 'Flt747',
    capacity: 500,
    start() {
        console.log('brummmmmmm');
    },
    cap() {
        console.log(`My Capacity is ${capacity}`); // will give output of reference error as the scope of the capicity is not accesible automatically
    }
};
aeroplane.cap();**/

// now let's use the 'this' keyword to access it
const aeroplane = {
    ['Fuel Type']: 'Octane',
    model: 'Flt747',
    capacity: 500,
    start() {
        console.log('brummmmmmm');
    },
    cap() {
        console.log(`My Capacity is ${this.capacity} and my model number is ${this.model}.`); //  the scope of the capicity is accesible as we have used the 'this' keyword.
    }
};
aeroplane.cap();
