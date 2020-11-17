const Port = require('../src/port.js');
const Ship = require('../src/ship.js');
const Itinerary = require('../src/itinerary.js');

describe('Port class', () => {
   it('can be instantiated', () => {
      expect(new Port()).toBeInstanceOf(Object)
   })
})

describe('Port properties', () => {
   let calais = new Port('Calais');

   it('should have a name', () => {
      expect(calais).toHaveProperty('name', 'Calais');
   });

   it('should store an array of docked ships', () => {
      expect(calais).toHaveProperty('ships', []);
   });
});

describe('Port methods', () => {
   let calais;
   let ship;
   let itinerary;
   beforeEach( () => {
      calais = new Port('Calais');
      itinerary = new Itinerary([ new Port('Dover'), calais, new Port('Hambourg'), new Port('Rotterdam')]);
      ship = new Ship(itinerary);
   });

   it('should be able to add to its ships array', () => {
      calais.addShip(ship);
      expect(calais.ships).toContain(ship);
   });

   it('should be able to remove ships from its ships array', () => {
      calais.addShip(ship);
      calais.removeShip(ship);

      expect(calais.ships).not.toContain();
   });

   it('should be able to handle multiple ships arriving', () => {
      let dana = new Ship(itinerary);
      let alice = new Ship(itinerary);

      ship.setSail();
      ship.dock();
      dana.setSail();
      dana.dock();
      alice.setSail();
      alice.dock();
     
      
      expect(calais.ships).toContain(ship && dana && alice);
   });

   


  
});