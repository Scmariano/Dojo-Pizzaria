function pizzaOven( crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2);

var p3 = pizzaOven("thin crust", "white sauce", ["mozzarella", "goat cheese"], ["sausage", "peppers", "onions"])
console.log(p3);

var p4 = pizzaOven("hand tossed", "marinara", ["ricotta", "parmesan"], ["pepperoni", "peppers", "pineapple"])
console.log(p4);


var crustType = ["deep dished", "hand tossed", "thin crust", "garlic bread"];
var sauceType = ["traditional", "marinara", "white sauce", "bbq"];
var cheese = ["mozzarella", "feta", "goat cheese", "ricotta"];
var toppings = ["pepperoni", "sausage", "mushrooms", "onions", "pineapple", "peppers"];


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)+ min)
}

function getRandomPick(arr){
var i = Math.floor(arr.length * Math.random());
    return arr[i];

}

function randomPizza() {
    var pizza1 = {};
    pizza1.crustType = getRandomPick (crustType);
    pizza1.sauceType = getRandomPick (sauceType);
    pizza1.cheese = getRandomPick (cheese);
    pizza1.toppings = getRandomPick (toppings);
    return pizza1;
}

console.log(randomPizza());
