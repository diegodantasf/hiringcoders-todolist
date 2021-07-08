const menuDeleteButtons = document.querySelectorAll(".list-menu [delete]")
const menuSortButtons = document.querySelectorAll(".list-menu [sort]")

const contentDeleteButtons = document.querySelectorAll(".list-content [delete]")
const contentAddButtons = document.querySelectorAll(".list-content [add-item]")

function createListItem() {
    const template = document.querySelector("#list-item")
    const item = template.content.cloneNode(true)

    const contentDeleteButtons = item.querySelectorAll("[delete]")
    for (let i = 0; i < contentDeleteButtons.length; ++i) {
        contentDeleteButtons[i].addEventListener("click", contentDeleteClick)
    }
    return item
}

function contentDeleteClick() {
    this.closest(".list-item").remove()
}

function contentAddClick() {
    const list = this.closest(".list").querySelector(".list-content > ul")
    let item = createListItem()
    list.prepend(item)
}

function menuDeleteClick() {
    const bulletList = this.closest(".list")
    bulletList.remove()
}

function menuSortClick() {
    const list = this.closest(".list").querySelector(".list-content > ul")
    const items = Array.from(list.querySelectorAll(".list-item"))
    
    items.sort(function(a, b) {
        return a.value < b.value;
    });
    
    for (let i = 0; i < items.length; ++i) {
        items[i].remove()
    }
    for (let i = 0; i < items.length; ++i)  {
        list.prepend(items[i])
    }
}

for (let i = 0; i < menuDeleteButtons.length; ++i) {
    menuDeleteButtons[i].addEventListener("click", menuDeleteClick)
}

for (let i = 0; i < menuSortButtons.length; ++i) {
    menuSortButtons[i].addEventListener("click", menuSortClick)
}

for (let i = 0; i < contentDeleteButtons.length; ++i) {
    contentDeleteButtons[i].addEventListener("click", contentDeleteClick)
}

for (let i = 0; i < contentAddButtons.length; ++i) {
    contentAddButtons[i].addEventListener("click", contentAddClick)
}


function createBulletList() {
    const template = document.querySelector("#list")
    const bulletList = template.content.cloneNode(true)

    const menuDeleteButtons = bulletList.querySelectorAll(".list-menu [delete]")
    const menuSortButtons = bulletList.querySelectorAll(".list-menu [sort]")

    const contentDeleteButtons = bulletList.querySelectorAll(".list-content [delete]")
    const contentAddButtons = bulletList.querySelectorAll(".list-content [add-item]")

    for (let i = 0; i < menuDeleteButtons.length; ++i) {
        menuDeleteButtons[i].addEventListener("click", menuDeleteClick)
    }
    
    for (let i = 0; i < menuSortButtons.length; ++i) {
        menuSortButtons[i].addEventListener("click", menuSortClick)
    }
    
    for (let i = 0; i < contentDeleteButtons.length; ++i) {
        contentDeleteButtons[i].addEventListener("click", contentDeleteClick)
    }
    
    for (let i = 0; i < contentAddButtons.length; ++i) {
        contentAddButtons[i].addEventListener("click", contentAddClick)
    }

    return bulletList
}

const newBulletListButton = document.querySelector(".todo-panel .new-list [add-list]")

newBulletListButton.addEventListener("click", function() {
    const todoPanel = this.closest('.todo-panel')
    todoPanel.insertBefore(createBulletList(), todoPanel.lastChild)
})


