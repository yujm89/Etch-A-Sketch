const container = document.querySelector("#container");


for (let i = 0; i < 9801; i++){
    const gridItem = document.createElement("div");
    let gridItemSize = 500/99;
    gridItem.style.height = `${gridItemSize}px`;
    gridItem.style.width = `${gridItemSize}px`;
    console.log(gridItemSize)

    container.appendChild(gridItem);
    gridItem.addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
    })
}


