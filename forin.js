let spaceship = {
    crew: {
      captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
      },
      'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
      },
      medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
      translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
      }
    }
  }; 
  
  // for...in
  for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].degree}`);
  }
  
  for ( let instance in spaceship.crew){
    console.log(`${spaceship.crew[instance].name}: ${spaceship.crew[instance].degree}`);
  };

  for ( let degree1 in spaceship.crew){
    console.log(`${spaceship.crew[degree1].degree}: ${spaceship.crew[degree1].name}`);
  }