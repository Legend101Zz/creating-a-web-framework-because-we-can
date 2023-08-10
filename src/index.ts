import { User } from "./models/User";

const user = new User({ name: "Mrigeshj", age: 10 });

user.set({ name: "Mrigeshj", age: 100 });

console.log(user.get("name"));
console.log(user.get("age"));
