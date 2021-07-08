import { createList } from "./list.js"

const newBulletListButton = document.querySelector(".todo-panel .new-list [add-list]")

newBulletListButton.addEventListener("click", function() {
    const todoPanel = this.closest('.todo-panel')
    todoPanel.insertBefore(createList(), todoPanel.querySelector(".new-list"))
})
