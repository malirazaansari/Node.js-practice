const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("error", (error) => {
  console.error("An error occurred:", error.message);
});

// Emitting an error
emitter.emit("error", new Error("Something went wrong!"));
