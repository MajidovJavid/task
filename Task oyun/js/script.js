let  item, itemList;

window.onload = () => {
    
    item = document.querySelectorAll(".item")
    itemList = document.querySelectorAll(".item")

    item.addEventListener("dragstart", function(e) {
        setTimeout(() => {
            this.classList.add("items")
        }, 0);
    })

    item.addEventListener("dragend", function(e) {
        this.classList.remove("items")
    })

    itemList.forEach(element => {
        element.addEventListener("dragover", onDragOver)
        element.addEventListener("dragleave", onDragLeave)
         element.addEventListener("drop", onDrop)
    })
}

function onDragOver(e) {
    e.preventDefault();
    this.classItem.add("over")
}

function onDragLeave(e) {
    this.classItem.remove("over")
}

function onDrop(e) {
    this.append(item);
}