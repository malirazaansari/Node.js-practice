const greet = (name) => {
  console.log("Hello" + "", name);
};

// greet("ali");
// greet("raza");
// greet("ansari");

// console.log(global);

setTimeout(() => {
  // console.log("Hello");
  // ("/n");
  greet("ali");
  clearInterval(iinterval);
}, 4000);

const iinterval = setInterval(() => {
  console.log("Ansari");
}, 1000);
