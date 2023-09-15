//Write a “person” class to hold all the details.
class person {
    constructor(name, age, gender, qualification, address) {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
        this.address=address;
    }
}
greet = () => {
return `details are ${name}`;
}
var myperson=new person("padma", 26, "female", "BE", "Kanchipuram")
console.log(myperson);

//write a class to calculate the uber price.

class price {
    constructor(km, cost) {
        this.km=km;
        this.cost=cost;
        
    }
}
greet = () => {
return `${km * cost}`;
}
var myprice=new price(12, 20)
console.log(`travel charge is ${12*20}`);

//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}


const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


console.log("Title: " + casinoRoyale.title);
console.log("Studio: " + casinoRoyale.studio);
console.log("Rating: " + casinoRoyale.rating);


// Convert the UML diagram to Typescript class. - use number for double

// Base class Shape
class Shape {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getDescription() {
        return `This is a ${this.color} ${this.name}.`;
    }
}

// Subclass Circle
class Circle extends Shape {
    constructor(name, color, radius) {
        super(name, color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    constructor(name, color, width, height) {
        super(name, color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

// Create instances of Circle and Rectangle
const redCircle = new Circle("Circle", "red", 5);
const blueRectangle = new Rectangle("Rectangle", "blue", 4, 6);

// Display information about the shapes
console.log(redCircle.getDescription());
console.log(`Area of the circle: ${redCircle.getArea()}`);

console.log(blueRectangle.getDescription());
console.log(`Area of the rectangle: ${blueRectangle.getArea()}`);