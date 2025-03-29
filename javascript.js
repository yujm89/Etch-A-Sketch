const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => reset());


for (let i = 0; i < 9801; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem")
    let gridItemSize = 500/99;
    gridItem.style.height = `${gridItemSize}px`;
    gridItem.style.width = `${gridItemSize}px`;
    container.appendChild(gridItem);
    gridItem.addEventListener("mouseover", function (e) {
        e.target.style.background = "black";
    })
}


function reset(){
    const canvas = document.querySelectorAll(".gridItem");
    canvas.forEach((item) => {
        item.style.backgroundColor = "white";
    })
}



