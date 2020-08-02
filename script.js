function myFunction(){
    let i;
    for(i = 0; i < 256; i++)
    {
        const insert = document.createElement("div");
        insert.className = "innerCell";
        insert.addEventListener("mouseover", rat);
        container.appendChild(insert);
    }
}

function rat(){
    this.className = "blue";
}

function reShape(){
    let x = prompt("Enter a number for grid dimensions.");
    x = Number(x);

    // ***********************************
    // YOINKED FROM w3 schools
    // SRC: https://www.w3schools.com/jsref/met_node_removechild.asp

    // Get the <ul> element with id="myList"
    var list = document.getElementById("container");

    // As long as <ul> has a child node, remove it
    while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
    }
    // END THE YOINK
    // ***********************************
    
    let i;
    // This inserts the proper amount of new elements, per user input.
    for(i = 0; i < (x*x); i++)
    {
        const insert = document.createElement("div");
        insert.className = "innerCell";
        insert.addEventListener("mouseover", rat);
        container.appendChild(insert);
    }
    // This is supposed to make the grid reshape to new dimensions.
    let cont = document.getElementById("container");
    cont.style.gridTemplateColumns = "repeat(" + x + ", auto)";
    cont.style.gridTemplateRows = "repeat(" + x + ", auto)";
    console.log(cont.style.gridTemplateColumns);
}

myFunction();