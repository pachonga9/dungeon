const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const showAndAsk = () => {
//     console.log(`you can do this.`);
//     console.log(`you can do that.`);
//     console.log(`You can do something else.`);
//     let answer = rl.question(`What do you want to do?`, (userInput) => {
//     return userInput;
//     })
// console.log(`you chose ${answer}`);
// return answer;
// };
// showAndAsk();
const ask = () => {
    console.log(`1. Kick down door.`);
    console.log(`2. Run away.`);
    console.log(`3. Fight Monster.`);
    console.log(`4. Quit Game.`);
    let answer = rl.question(`What do you want to do?`, (userInput) => {
            return userInput;
    });
    return answer;
} ;
const gameStart = () => {
    console.log(`You stand at the door of a dungeon.`);
    let choice = ask();
    if(choice == `1`){
        console.log(`You kick down the door.`);
    } else if (choice == `2`){
        console.log(`You ran away.`);
    } else if (choice == `3`){
        console.log(`You fought the monster.`)
    } else if (choice == '4'){
        console.log(`You quit.`)
    }
};
gameStart();

// // rl.question(`what is your name?`, (name) => {
// //     console.log(`hello ${name}`);
// //     return name;
// // });
// const options = () => {
//     console.log(`What do you want to do?`);
//     console.log(`1. Do this.`);
//     console.log(`2. Do that.`);
//     console.log(`3. Do something else`);
//     rl.question(``, (userInput) => {
//         return userInput;
//     })
// };

// // let askNow = rl.question(options(), (userInput) => {
// //     console.log(`your answer: ${userInput}`);
// //     return userInput;
// // });
// const startGame = () => {
//     options();
// }

// startGame();




