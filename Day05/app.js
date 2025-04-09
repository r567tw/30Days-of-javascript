const hello = () => {
  console.log("Hello from func");
};

function test(name) {
  console.log("Hello,", name);
}

const baz = () => {
  const foo = "baz";
  console.log("foo =", foo);
};

hello();
test("jimmy");

let foo = "bar";
console.log("foo =", foo);
baz();
console.log("foo =", foo); // foo is still "bar" because baz() has its own scope
