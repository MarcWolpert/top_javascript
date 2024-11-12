

function Book(title,author,pages,isRead){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    this.info=function (){
        return `${this.title} by ${this.author}, ${String(this.pages)+" pages"}, ${isRead ? "has been read" : "not read yet"}`;
    }
}
Book.prototype.sayHello=function(){
    console.log(`Hello, I'm a prototype function.`)
}
 

const bookObject=new Book("The Hobbit", "Tolkien", "295", 0);
console.log(bookObject.info());

console.log(bookObject.sayHello());
console.log(Object.getPrototypeOf(bookObject));

// // Don't do this!
// // Use Object.setPrototypeOf(Player.prototype, Person.prototype)
// Player.prototype = Person.prototype;


