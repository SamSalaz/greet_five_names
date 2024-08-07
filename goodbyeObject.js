const bye = require('./goodbye.js');

const nameObj = {
    name1: "Keishiro",
    name2: "Riku",
    name3: "Edmon",
    name4: "Desmond",
    name5: "Arthur"
};

for (let name in nameObj) {
    bye(nameObj[name]);
};