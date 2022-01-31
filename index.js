
class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    getArea() {
        return this.length * this.breadth;
    }
}

class Square extends Rectangle {
    constructor( side ){
        super( side, side );
    }
    getPerimeter() {
        return 2*( this.length + this.breadth );
    }
}

const l = 5;
const square = new Square( l );
console.log( "Side of Square = ", l)
console.log( "Area of Square = ", square.getArea() );
console.log( "Perimeter of Square = ", square.getPerimeter() );