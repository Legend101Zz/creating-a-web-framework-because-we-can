import { User } from "./models/User";

const user = new User({ name: "Mrigeshj", age: 10 });

user.on("nunu", () => {
  console.log("hello");
});
user.trigger("nunu");
