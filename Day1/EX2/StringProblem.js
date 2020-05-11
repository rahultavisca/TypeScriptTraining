var paragraph = "my name is Rahul Yadav.I am a software developer.i work in Tavisca.i like to read books.";
var ocurences = 0;
var updatedPara;
console.log("indexes and occurances of a =>");
for (var i = 0; i < paragraph.length; i++) {
    var character = paragraph.charAt(i);
    if (character.toLocaleLowerCase() == 'a') {
        console.log("index of a => " + i);
        ocurences++;
    }
}
console.log();
console.log("occurances of a => " + ocurences);
var statements = paragraph.split(".");
console.log();
console.log("number of statements => " + statements.length);
for (var _i = 0, statements_1 = statements; _i < statements_1.length; _i++) {
    var statement = statements_1[_i];
    var updatedStatement = statement.charAt(0).toUpperCase() + statement.slice(1);
    updatedPara = "" + (updatedPara ? updatedPara + ". " : "") + updatedStatement;
}
console.log();
console.log("Para with fist letter upper case => " + updatedPara);
