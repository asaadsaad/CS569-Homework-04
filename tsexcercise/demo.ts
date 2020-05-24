console.log("hello world");

function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(3, 2));

console.log(add("3", " 2"));

enum Technologies {
  React = "bikale",
  ReactNative = "ggg",
  Angular = "ddd",
}

console.log(Technologies.React);

interface Employe {
  name: string;
}

let emp = {} as Employe;
emp.name = "bikale";
console.log(emp);

interface ICourse {
  code: number;
  name: string;
  getGrade: (number) => number;
}
class Course implements ICourse {
  code;
  name: string;
  constructor(code: number, name: string) {
    this.code = code;
    this.name = name;
  }
  getGrade(code: number): number {
    return 90;
  }
}
let course = new Course(569, "Web Application Development II");
