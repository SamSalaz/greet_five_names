const namesArr = [
    "Keishiro", "Riku", "Edmon", "Desmond", "Arthur"
];

// for (let i = 0; i < namesArr.length - 1; i++) {
//     console.log(`Hello, ${namesArr[i]}.`)
// };

namesArr.forEach((name) => {
    console.log(`Hello, ${name}.`)
});
 
//warp this forEach in a function

namesArr2 = [
    "Maxa", "Slap", "Bluish", "Matthew", "Jess"
];

function greetNames(arr) { 
    arr.forEach((name) => {
        console.log(`Hello, ${name}.`)
    });

};

// greetNames(namesArr);
// greetNames(namesArr2);

global.namesArr = namesArr;
global.greetNames = greetNames;