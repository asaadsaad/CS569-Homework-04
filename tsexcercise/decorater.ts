@addAge(20)
class Myclass {
  name: string = "Bikale";
}

function addAge(age: number) {
  return function (targetClass: any) {
    return class {
      name = new targetClass().name;
      age = age;
    };
  };
}
