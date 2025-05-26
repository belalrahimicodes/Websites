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



