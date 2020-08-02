function insertElements(numElements){
    let i;
    for(i = 0; i < numElements; i++)
    {
        const insert = document.createElement("div");
        insert.className = "innerCell";
        insert.addEventListener("mouseover", makeBlue);
        container.appendChild(insert);
    }
}

function makeBlue(){
    this.className = "blue";
}

function reShape(){
    // ***********************************
    // YOINKED FROM w3 schools
    // SRC: https://www.w3schools.com/jsref/met_node_removechild.asp

    var list = document.getElementById("container");
    while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
    }

    // END THE YOINK
    // ***********************************

    // Get userInput, make numElements box
    let x = prompt("Enter a number for grid dimensions.");
    x = Number(x);
    let numElements = x * x;
    insertElements(numElements);

    // Change CSS grid templates to fit new numElements
    let cont = document.getElementById("container");
    cont.style.gridTemplateColumns = "repeat(" + x + ", auto)";
    cont.style.gridTemplateRows = "repeat(" + x + ", auto)";
    console.log(cont.style.gridTemplateColumns);
}

insertElements(256);