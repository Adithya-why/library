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
    div.dataset.no=i;

    const inDivName = document.createElement("div");
    inDivName.innerHTML = myLibrary[i].name;

    
    const inDivAuth = document.createElement("div");
    inDivAuth.innerHTML = myLibrary[i].author;

    const inDivNop = document.createElement("div");
    inDivNop.innerHTML = myLibrary[i].noOfPages;

    const inDivRd = document.createElement("div");
    inDivRd.classList.add('rdtext')
    inDivRd.innerHTML = myLibrary[i].haveRead;

    const btnr = document.createElement("button");
    btnr.innerHTML = "Remove book";
    btnr.classList.add("btnr");
    btnr.classList.add(`${i}`);


    const btnrd = document.createElement("button");
    btnrd.innerHTML = "Read status";
    btnrd.classList.add("btnrd");
    btnrd.classList.add(`${i}`);
    

    if(myLibrary[i].haveRead === true){
        btnrd.classList.add('read');
       
    }

    else{
        btnrd.classList.add('unread');
    }

    btnrd.addEventListener('click',(e)=>{
        e.target.classList.toggle('read');
        e.target.classList.toggle('unread');
        document.querySelector('.rdtext').innerHTML = myLibrary[i].haveRead;
    })


    div.appendChild(inDivName);
    div.appendChild(inDivAuth);
    div.appendChild(inDivNop);
    div.appendChild(inDivRd);
    div.appendChild(btnr);
    div.appendChild(btnrd);

    bks.appendChild(div);
}


const btn = document.querySelector('button#su');
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
    div.dataset.no=myLibrary.length-1;

    const inDivName = document.createElement("div");
    inDivName.innerHTML = myLibrary[myLibrary.length-1].name;

    const inDivAuth = document.createElement("div");
    inDivAuth.innerHTML = myLibrary[myLibrary.length-1].author;

    const inDivNop = document.createElement("div");
    inDivNop.innerHTML = myLibrary[myLibrary.length-1].noOfPages;

    const inDivRd = document.createElement("div");
    inDivRd.innerHTML = myLibrary[myLibrary.length-1].haveRead;


    const btnr = document.createElement("button");
    btnr.innerHTML = "Remove book";
    btnr.classList.add("btnr");
    btnr.classList.add(`${myLibrary.length-1}`);

    btnr.addEventListener('click',(e)=>{
        let i = (e.target.classList)[1];
        let clr = document.querySelector(`[data-no="${i}"]`);
        clr.remove();
    })



    const btnrd = document.createElement("button");
    btnrd.innerHTML = "Read status";
    btnrd.classList.add("btnrd");
    btnrd.classList.add(`${myLibrary.length-1}`);


    

    if(brd===true){
        btnrd.classList.toggle('read');
        
    }

    else{
        btnrd.classList.add('unread');
    }


    btnrd.addEventListener('click',(e)=>{
        e.target.classList.toggle('read');
        e.target.classList.toggle('unread');

    })


    div.appendChild(inDivName);
    div.appendChild(inDivAuth);
    div.appendChild(inDivNop);
    div.appendChild(inDivRd);
    div.appendChild(btnr);
    div.appendChild(btnrd);
    bks.appendChild(div);


    

});



const btnr = document.querySelectorAll(".btnr");
btnr.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let i = (e.target.classList)[1];
        let clr = document.querySelector(`[data-no="${i}"]`);
        clr.remove();
    })
});
const bauth = document.querySelector("#bauth");
const bnop = document.querySelector("#bnop");
const brd = document.querySelector("#brd");


const bname = document.querySelector("#bname");
bname.addEventListener('input',function(){
    if(!bname.validity.valueMissing){
    bname.setCustomValidity("NAme required");
    }

    else{
        bname.setCustomValidity("");
    }
});


bnop.addEventListener('input',function(){
    bnop.setCustomValidity("Num required");
});




