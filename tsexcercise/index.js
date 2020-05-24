function sayHi(msg) {
  console.log(msg + this.name);
}

const student = {
  name: "bikale",
};
sayHi.apply(student, ["hi"]);


