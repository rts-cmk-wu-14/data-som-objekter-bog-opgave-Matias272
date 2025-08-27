//Opgave 1
let person = {
    firstName: "Mathias",
    lastName: "Orizi",
    weight: "2000kg",
    height: "160cm",
    favoriteFood: "pizza",
    birth: new Date("2005-02-12")
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.weight);
console.log(person.height);
console.log(person.favoriteFood);
console.log(person.birth);




console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["weight"]);
console.log(person["height"]);
console.log(person["favoriteFood"]);

console.log("");
//Opgave 2
let person2 = {
    firstName: "Mathias",
    lastName: "Orizi",
    weight: "2000kg",
    height: "160cm",
    hobbies: [
        "gooning", "extra-gooning", "more-gooning", "LOL", "spis", "booster"
    ],
    isGay: true,
    pet: {
        type: "cat",
        name: "Jerry"
    }
}
person2.hobbies.forEach(function(hobby){
    console.log(hobby);
})
console.log(person2.pet.type);
console.log(person2.pet.name);


console.log("");
//Opgave 3












