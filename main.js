let myLibrary = [];
const bks = document.querySelector(".bks");

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

const b1 = new Book("Tom sawyer","Mark twain",100,true);
const b2 = new Book("Tom sawyer","Mark twain",100,true);
const b3 = new Book("Tom sawyer","Mark twain",100,true);
const b4 = new Book("Tom sawyer","Mark twain",100,true);

myLibrary.push(b1);
myLibrary.push(b2);
myLibrary.push(b3);
myLibrary.push(b4);



for(let i=0;i<myLibrary.length;i++){
    const div = document.createElement("div");
    div.classList.add(`bkno`);
    div.classList.add(`${i}`);
    const inDivName = document.createElement("div");
    inDivName.innerHTML = myLibrary[i].name;

    const inDivAuth = document.createElement("div");
    inDivAuth.innerHTML = myLibrary[i].author;

    const inDivNop = document.createElement("div");
    inDivNop.innerHTML = myLibrary[i].noOfPages;

    const inDivRd = document.createElement("div");
    inDivRd.innerHTML = myLibrary[i].haveRead;

    div.appendChild(inDivName);
    div.appendChild(inDivAuth);
    div.appendChild(inDivNop);
    div.appendChild(inDivRd);


    bks.appendChild(div);
}
