const menuDeleteButtons = document.querySelectorAll(".bullet-list-menu [delete]")
const menuSortButtons = document.querySelectorAll(".bullet-list-menu [sort]")

const contentDeleteButtons = document.querySelectorAll(".bullet-list-content [delete]")
const contentAddButtons = document.querySelectorAll(".bullet-list-content [add-item]")

function createListItem() {
    const template = document.querySelector("#bullet-list-item")
    const item = template.content.cloneNode(true)

    const contentDeleteButtons = item.querySelectorAll("[delete]")
    for (let i = 0; i < contentDeleteButtons.length; ++i) {
        contentDeleteButtons[i].addEventListener("click", contentDeleteClick)
    }
    return item
}

function contentDeleteClick() {
    this.closest(".bullet-list-item").remove()
}

function contentAddClick() {
    const list = this.closest(".bullet-list").querySelector(".bullet-list-content > ul")
    let item = createListItem()
    list.prepend(item)
}

function menuDeleteClick() {
    const bulletList = this.closest(".bullet-list")
    bulletList.remove()
}

function menuSortClick() {
    const list = this.closest(".bullet-list").querySelector(".bullet-list-content > ul")
    const items = Array.from(list.querySelectorAll(".bullet-list-item"))
    
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
    const template = document.querySelector("#bullet-list")
    const bulletList = template.content.cloneNode(true)

    const menuDeleteButtons = bulletList.querySelectorAll(".bullet-list-menu [delete]")
    const menuSortButtons = bulletList.querySelectorAll(".bullet-list-menu [sort]")

    const contentDeleteButtons = bulletList.querySelectorAll(".bullet-list-content [delete]")
    const contentAddButtons = bulletList.querySelectorAll(".bullet-list-content [add-item]")

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

const newBulletListButton = document.querySelector(".todo-panel .new-bullet-list [add-bullet-list]")

newBulletListButton.addEventListener("click", function() {
    const todoPanel = this.closest('.todo-panel')
    todoPanel.insertBefore(createBulletList(), todoPanel.lastChild)
})


