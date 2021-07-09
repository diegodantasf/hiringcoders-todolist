import { createList, initList } from "./list.js"

const newListButton = document.querySelector("#todo-panel .new-list [add-list]")
const todoPanel = document.querySelector('#todo-panel')

newListButton.addEventListener("click", function() {
    todoPanel.insertBefore(createList(), todoPanel.querySelector(".new-list"))
})


window.addEventListener("beforeunload", function(e) {
    const dataSaving = {
        lists: []
    }
    const lists = document.querySelectorAll(".list")

    lists.forEach(function (list) {
        const listName = list.querySelector(".list-menu [name]")
        const items = list.querySelectorAll(".list-content .list-item")
        
        let itemsData = [];
        
        items.forEach(item => {
            const itemDescription = item.querySelector("[description]")
            const itemPriority = item.querySelector("[priority]")
            itemsData.push({
                description: itemDescription.innerHTML,
                priority: itemPriority.value                
            })
        })

        dataSaving["lists"].push({
            name: listName.innerHTML,
            items: itemsData
        })
    })

    window.localStorage.setItem("data", JSON.stringify(dataSaving))
})

const data = JSON.parse(window.localStorage.getItem("data"))

if (data !== null) {
    data["lists"].forEach(data => {
        let listElement = createList()
        listElement = initList(listElement, data)
        todoPanel.insertBefore(listElement, todoPanel.querySelector(".new-list"))
    })
}

