@addAvailability(true)
class Courses {}

function addAvailability(available: boolean) {
  return function (targetClass: Function) {
    return class {
      available = available;
    };
  };
}

console.log(new Courses());
