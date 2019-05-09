/* Declare and Define the functions here that will make the function calls below work properly */

function first (par1,par2){
  par2(par1[0]);
};




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last (par1,par2){
  par2(par1[par1.length -1]);
};



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});

function contains(name, names, check){
  let isTrue = false;
  if(names.indexOf(name) !== -1){
    isTrue = true;
  }
  check(isTrue);
  return isTrue;
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});

function map(numbers, fn) {
  let newArr = numbers.slice(0, numbers.length);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = fn(newArr[i]);
  }
  return newArr;
};


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

function uniq(name, fn) {
  let newArr = name.slice(0, name.length);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) !== i) {
      newArr.splice(i, 1);
      i--;
    }
  };
  fn(newArr);
  return newArr;
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ["Tyler", "Cahlan", "Ryan", "Colt", "Tyler", "Blaine", "Cahlan"];
each(names, function(item, indice) {
  console.log(`The item in the ${indice} position is ${item}`); /// changed the string from using " " to ` `
});

function each(name, fn) {
  for (let i = 0; i < name.length; i++) {
    fn(name[i], i);
  }
};



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

function getUserById(userId, users, fn) {
  let user;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      user = users[i];
    }
  }
  fn(user);
}




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})








