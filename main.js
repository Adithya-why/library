let myLibrary = [];

function Book(n,a,nop,rd){
    this.name = n,
    this.author = a,
    this.noOfPages = nop,
    this.haveRead = rd
}


Book.prototype.info = function(){
    return this.name + this.author + this.noOfPages+ this.haveRead;
}

function addToBooks(){
    let n,a,nop,rd;
    n = prompt("ENter the name of the book");
    a = prompt("ENter the author of the book");
    nop = parseInt(prompt("ENter the no. of pages"));
    rd = prompt("Have you read the book(true/false)");

    let book = new Book(n,a,nop,rd);
    myLibrary.push(book);
}


addToBooks();
for(let i=0;i<=myLibrary.length;i++){
    document.write(myLibrary[i].info())
}
