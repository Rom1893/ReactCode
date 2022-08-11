import {choice, remove} from "./helpers";
import fruits from "./foods"

let ex1 = choice(fruits);
console.log(`I'd like one ${ex1}, please`);
console.log(`Here you go: ${ex1}`);
console.log(`Delicious may i have another`);
let ex2 = remove(fruits, ex1);
console.log(`Im sorry we are all out, we have ${ex2} instead`)