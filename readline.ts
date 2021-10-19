///in plain javascript you would say:
/// var readline = require('readline');
/// var rl = readline.createInterface(process.stdin, process.stdout);
/// in typescript you must import like so...
import * as readline from 'readline';
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

var realPerson = {
    name: '',
    sayings: []
};
/// The rl.question() method displays the query by writing it to the output, 
/// waits for user input to be provided on input, 
/// then invokes the callback function passing the provided input as the first argument.
rl.question('What is the name of a real person? ', function(answer){
    realPerson.name = answer;
/// The rl.setPrompt() method sets the prompt that will be written to output whenever rl.prompt() is called.
    rl.setPrompt(`What would ${realPerson.name} say? `)
/// displays the prompt set by the setPrompt() method.
    rl.prompt();
/// rl.on('line', ...) is an event that will fire when the user submits an answer.
    rl.on('line', function(saying){
        realPerson.sayings.push(saying.trim());
        if(saying.toLowerCase().trim() === 'exit'){
/// The rl.close() method closes the readline.Interface instance 
/// and relinquishes control over the input and output streams. 
/// When called, the 'close' event will be emitted.
            rl.close();
        } else {
            rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave.) `);
            rl.prompt();
        }
    });
});

rl.on('close', function(){
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
///When Node.js runs this line, process.exit(), the process is immediately forced to terminate.
    process.exit();
});