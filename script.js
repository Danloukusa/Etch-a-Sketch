function myFunction(){
    let i;
    for(i = 0; i < 256; i++)
    {
        const insert = document.createElement("p");
        insert.className = "innerCell";
        insert.addEventListener("mouseover", rat);
        container.appendChild(insert);
    }
}

function rat(){
    this.className = "blue";
}

myFunction();