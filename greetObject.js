const greet = require('./greet.js');

const nameObj = {
    name1: "Keishiro",
    name2: "Riku",
    name3: "Edmon",
    name4: "Desmond",
    name5: "Arthur"
};

const nameObj2 = {
    
};

// make a function that is reusable
// so you could pass in any object and have it greet
//and say goodbye to the names in that object

for (let name in nameObj) { 
    greet(nameObj[name]);
};

function saluteNames(obj) { 
    for (let name in obj) {
        greet(nameObj[name]);
        bye(nameObj[name]);
    };

};

saluteNames(nameObj);
saluteNames(nameObj2);