import Building from './5-building';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
  new TestBuilding(200);
} catch (error) {
  console.log(error);
};
