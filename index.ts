import {App} from "./app";

const app = new App();
app.run();

// // KNOWN BUGS: 
// // A. If you run the game, and then select 1, an error is thrown saying room1 is not a function but
// //    if you run the game, select 3. run away, and then select 1, the error is not shown but the function is still not running.
// // B. Pretty sure my booleans won't work but I can't fix that until I fix the first bug..
