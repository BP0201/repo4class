function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}
// becomes
function createInstructor(firstName, lastName){
    return {
        firstName, lastName
    }
}
// 2.
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
// becomes
const instructor1 = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
}
// 3.
var instructor2 = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
// becomes
const instructor3 = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi!'
    },
    sayBye(){
        return this.firstName + ' says bye!'
    }
}
// 4.
function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise
        }
    }
}