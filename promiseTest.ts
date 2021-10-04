// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 2) {
//         resolve(`Passed.`);
//     } else {
//         reject(`Failed.`);
//     };
// }); 

// p.then((message) => {
//     console.log(`This promise was fullfilled so then the test ${message}`);
// }).catch((message) => {
//     console.log(`I caught that this promise was not met, so the test ${message}`);
// });

// ////////////
let monsterLife: number = 100;

function isTheMonsterAlivePromise(){
    return new Promise((resolve, reject) => {
        if(monsterLife <= 100){
            resolve({
                name: 'Monster is Fine',
                message: 'The Monster is in perfect health!'
            })
        } else if(monsterLife < 1 && monsterLife > 100){
            resolve({
                name: 'Monster is Wounded',
                message: 'The monster seems to be hurt.'
            })
        } else {
            resolve({
                name: 'Monster is Dead.',
                message: 'Leave it for the maggots...'
            })
        }
    })
};

isTheMonsterAlivePromise().then((message) => {
    console.log(`UH OH: ${message}`)
}).catch((status) => {
    console.log(status.name + ' ' + status.message)
});

