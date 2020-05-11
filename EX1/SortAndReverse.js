var names = new Array();
names.push("James Bond");
names.push("Ethan Hunt");
names.push("Indiana Jones");
names.push("Jason Bourn");
console.log("Sorted Names =>");
console.log();
names.sort(function (n1, n2) { return n1.length - n2.length; }).forEach(function (v, i) {
    console.log(v);
});
console.log();
console.log("Revere Names =>");
console.log();
names.reverse().forEach(function (v, i) {
    console.log(v);
});
