//Classes and Constructors

class Products{
    constructor(name, size, price){
        this.name = name,
        this.size = size,
        this.price = price
    }

    showProduct(){
        console.log(`Product name is: ${this.name}`);
        console.log(`Product size is: ${this.size}`);
        console.log(`Product price is: CHF${this.price.toFixed(2)}`);
    }
    calTotslPrice(taxes){
        this.price += this.price * taxes;
        console.log(`Total price after tax is: ${this.price.toFixed(2)}`);
    }
}

const product1 = new Products("Jacket", "Medium", 70.99);
product1.showProduct();

const product2 = new Products("Shoes", "Medium", 100);
product2.showProduct();


const taxes = 0.02;
product2.calTotslPrice(taxes);

//Static

class Users{

    static count = 0;

    constructor(name){
        this.name = name,
        Users.count++
    }

    displayUser(){
        console.log(`User is: ${this.name}`);
    }
}

const user1 = new Users("Ronaldo");
const user2 = new Users("Dembele");
const user3 = new Users("Lamine Yamal");

user1.displayUser();
console.log(`User count is: ${Users.count}`);

//inheritance

class fruits{

    colors(){
        console.log(`The color of this fruit is: ${this.color}`);
    }

}
class color extends fruits{
    color = "green";
}

const color1 = new color();
color1.colors();

class cars{

    models(){
        console.log(`This ${this.name} is new.`);
    }
}
class brands extends cars{
    name = "Porsche";
}
const brand1 = new brands();
brand1.models();

//Super keyword

class Library{
    constructor(name, location){
        this.name = name,
        this.location = location
    }
    libraryFound(lib, status){
        console.log(`The Library "${lib}" is ${status}.`);
    }
}
class books extends Library{
    constructor(name, location, year){
        super(name, location);
        this.year = year;
    }
    booksFound(){
        console.log(`The book "${this.name}" is found in ${this.location} which is written in ${this.year}.`);
        super.libraryFound("Zentral", "old");
    }
}
class pens extends Library{
    constructor(name, location, color){
        super(name, location);
        this.color = color;
    }
     pensFound(){
        console.log(`The pen "${this.name}" is found in ${this.location} which is ${this.color}.`);
        super.libraryFound("Wetzikon", "new");
    }
    
}

const book1 = new books("The Alchemist", "Oerlikon", 1988);
book1.booksFound();

const pen1 = new pens("Swiss", "Zürich", "blue");
pen1.pensFound();




