let names: Array<string> = new Array<string>();
names.push("James Bond");
names.push("Ethan Hunt");
names.push("Indiana Jones");
names.push("Jason Bourn");

console.log("Sorted Names =>");

console.log();

names.sort((n1, n2) => { return n1.length - n2.length; } ).forEach((v:string, i:number)=> {
    console.log(v);
});

console.log();

console.log("Revere Names =>");

console.log();

names.reverse().forEach((v:string, i:number)=> {
    console.log(v);
});