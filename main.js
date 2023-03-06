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


const btn = document.querySelector('button');
btn.addEventListener('click',(e)=>{
    const bname = document.querySelector("#bname").value;
    const bauth = document.querySelector("#bauth").value;
    const bnop = document.querySelector("#bnop").value;
    const brd = document.querySelector("#brd").checked;

    const b = new Book(bname,bauth,parseInt(bnop),brd)
    myLibrary.push(b);
    const div = document.createElement("div");
    div.classList.add(`bkno`);
    div.classList.add(`${myLibrary.length-1}`);
    const inDivName = document.createElement("div");
    inDivName.innerHTML = myLibrary[myLibrary.length-1].name;

    const inDivAuth = document.createElement("div");
    inDivAuth.innerHTML = myLibrary[myLibrary.length-1].author;

    const inDivNop = document.createElement("div");
    inDivNop.innerHTML = myLibrary[myLibrary.length-1].noOfPages;

    const inDivRd = document.createElement("div");
    inDivRd.innerHTML = myLibrary[myLibrary.length-1].haveRead;

    div.appendChild(inDivName);
    div.appendChild(inDivAuth);
    div.appendChild(inDivNop);
    div.appendChild(inDivRd);


    bks.appendChild(div);

});






