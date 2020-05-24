// class MyClass {
//   public _password: string = "Default";
//   //   get password() {
//   //     return this._password;
//   //   }
//   //   set password(value: string) {
//   //     this._password = value;
//   //   }
// }

// const myclass = new MyClass();
// console.log(myclass._password);

class Person {
  constructor(public name: string) {}
}

function display<T extends Person>(person: T): void {
  console.log(person.name);
}

let person = new Person("Bikale");

display(person);


