let paragraph = "my name is Rahul Yadav.I am a software developer.i work in Tavisca.i like to read books."
let ocurences = 0;
let updatedPara;
console.log("indexes and occurances of a =>");

for (let i = 0; i < paragraph.length; i++) {
    const character = paragraph.charAt(i);
    if(character.toLocaleLowerCase() == 'a')
    {
        console.log("index of a => " + i);
        ocurences++;
    }
    
}

console.log();
console.log("occurances of a => " + ocurences);

let statements = paragraph.split(".");

console.log();
console.log("number of statements => " + statements.length);

for (let statement of statements) {
    let updatedStatement = statement.charAt(0).toUpperCase() + statement.slice(1);
    updatedPara = `${updatedPara ? updatedPara + ". ": ""}` + updatedStatement ;
}

console.log();
console.log("Para with fist letter upper case => " + updatedPara);

