import promptSync from "prompt-sync";

console.log('welcome to the dungeon');
const name = promptSync()('What is your name? ');
console.log(`Hey there ${name}`);

