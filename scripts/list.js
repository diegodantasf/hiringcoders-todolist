function contentDeleteClick() {
    this.closest(".list-item").remove()
}

function contentAddClick() {
    const list = this.closest(".list").querySelector(".list-content > ul")
    let item = createListItem()
    list.prepend(item)
}

function menuDeleteClick() {
    const list = this.closest(".list")
    list.remove()
}

function menuSortClick() {
    const list = this.closest(".list").querySelector(".list-content > ul")
    const items = Array.from(list.querySelectorAll(".list-item"))
    
    const sortedItems = items.sort(function(a, b) {
        return a.querySelector("[priority]").value - b.querySelector("[priority]").value
    });

    for (let i = 0; i < items.length; ++i) {
        items[i].remove()
    }    

    for (let i = 0; i < items.length; ++i)  {
        list.prepend(sortedItems[i])
    }
}

function createListItem() {
    const template = document.querySelector("#list-item")
    const item = template.content.cloneNode(true)

    const DeleteButton = item.querySelector("[delete]")
    DeleteButton.addEventListener("click", contentDeleteClick)
    return item
}

export function createList() {
    const template = document.querySelector("#list")
    const list = template.content.cloneNode(true)

    // List menu
    const menuDeleteButtons = list.querySelectorAll(".list-menu [delete]")
    const menuSortButtons = list.querySelectorAll(".list-menu [sort]")
    // List content
    const contentDeleteButtons = list.querySelectorAll(".list-content [delete]")
    const contentAddButtons = list.querySelectorAll(".list-content [add-item]")

    menuDeleteButtons.forEach(deleteButton => 
        deleteButton.addEventListener("click", menuDeleteClick))

    menuSortButtons.forEach(sortButton => 
        sortButton.addEventListener("click", menuSortClick))
    
    contentDeleteButtons.forEach(deleteButton => 
        deleteButton.addEventListener("click", contentDeleteClick))

    contentAddButtons.forEach(addButton => 
        addButton.addEventListener("click", contentAddClick))

    return list
}

export function initList(list, data) {
    const listName = list.querySelector(".list-menu [name]")
    const listContent = list.querySelector(".list-content > ul")

    listName.innerHTML = data['name']
    data['items'].slice().reverse().forEach(item => {
        const itemElement = createListItem()
        const itemDescription = itemElement.querySelector("[description]")
        const itemPriority = itemElement.querySelector("[priority]")

        itemDescription.innerHTML = item['description']
        itemPriority.value = item['priority']

        listContent.prepend(itemElement)
    })

    return list
}
