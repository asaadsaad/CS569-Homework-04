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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
function display(person) {
    console.log(person.name);
}
var person = new Person("Bikale");
display(person);
