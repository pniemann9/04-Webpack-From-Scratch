alert('Hello world')


const sayHello = () => {
  document.body.innerHTML = "Hello world";
};

sayHello();

class Greeter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    document.body.innerHTML = `Hello ${this.name}!`;
  }
}

const greeter = new Greeter("Boris");
greeter.sayHello();
