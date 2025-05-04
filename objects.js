/**let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  // using dot notation property for accessing values 
  let crewCount = spaceship.numCrew;
  let planetArray = spaceship.flightPath;

// understanding bracket quotation 
  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // using bracket quotation for accessing values of objects
  let isActive = spaceship['Active Mission'];
  console.log(spaceship['Active Mission']);**/

//reassgining new properties to an object

  let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  
  spaceship.color = 'glorious gold';//new value to a key
  spaceship.numEngines = 10;//adding new property to an object
  delete spaceship['Secret Mission'];//deleting a property.

  console.log(spaceship);