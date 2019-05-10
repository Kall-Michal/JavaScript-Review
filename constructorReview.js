//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
  function Animal (spieces, name, legs, color, food){
    this.spieces = spieces,
    this.name = name,
    this.legs = legs,
    this.color = color,
    this.food = food
  }

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
  function createPerson (name, age, height, gender) {
    return {
      name: name,
      age: age,
      height: height,
      gender: gender
    }
  }


//Create a animal array and a person array.

  //code here
  let personArr = [];
  let animalArr = [];


//Create two instances of Animal and push those into your animal array

  //code here
  const dog = new Animal("husky", "Kai", true , "white",["dog food", "fish", "raindeer"]);
  const pegasus = new Animal("unicorn", "Pegasus", true, "white", ["fairydust"]);
animalArr.push(pegasus, dog);



//Create two instances of person and push those into your person array.

  //code here
  const me = createPerson("Michal", 24, 180, "male");
  const person = createPerson("Person1", null, null, "GenderFluid 2.0" );
  personArr.push(me, person);



//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
  Animal.prototype.eat = function() {
    let n = Math.floor(Math.random() * this.food.length);
    alert(`${this.name} just ate: ${this.food[n]}`);
  }

dog.eat();


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
      //****************************************should ccreate new instance of the object and inherit the same parameters
  2) What's a good way to describe the keyword 'this'
      // **************************************** reffers to the current object/class/ depends where used, but always point to the very object we are using it in. 

  3) Can a normal function which creates an object and then returns that object use the prototype?
    // ****************************************not sure.

  4) What happens if you forget to use 'new' when calling a constructor?
    // ****************************************Function should be invoked as any other function without "new" key-word.
*/