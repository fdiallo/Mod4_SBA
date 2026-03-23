let cart = []

let btnAddTask = document.getElementById("btnAddTask")
let btnRemoveLastTask = document.getElementById("btnRemoveLastTask")
let btnUpdateTask = document.getElementById("btnUpdateTask")
let inputFilterTask = document.getElementById("inputFilterTask")

let list = document.getElementById("list")
const listItems = document.querySelectorAll('#list li')

let inputName = document.getElementById("inputTaskName")
let inputCategory = document.getElementById("inputTaskCategory")
let inputDeadline = document.getElementById("inputTaskDeadline")
let selectStatusElement = document.getElementById("inputTaskStatus")

btnAddTask.addEventListener("click", function () {
    let taskName = inputName.value.trim()
    let taskCategory = inputCategory.value.trim()
    let taskDeadline = inputDeadline.value.trim()
    let selectedSatusValue = selectStatusElement.value.trim()

    if (taskName === "" && taskCategory === "" && taskDeadline === "" && selectedSatusValue === "") {
        alert("Please enter value for all fields!")
        return;
    }
    let task = {
        name: taskName,
        category: taskCategory,
        deadline: taskDeadline,
        status: selectedSatusValue
    }
    if (cart.some(task => task.name === taskName)) {
        alert(`Task ${taskName} already exists.`)
        return
    }
    cart.push(task);

    renderCart(cart);

});

btnUpdateTask.addEventListener("click", function () {
    let taskName = inputName.value.trim()
    let selectedSatusValue = selectStatusElement.value.trim()

    if (taskName === "") {
        alert("Task name to update is required!")
        return;
    }

    const task = cart.find(task => task.name === taskName)

    if (task !== "undefined") {
        task.status = selectedSatusValue
    } else {
        alert("Task Not Found!")
    }

    const currentDate = new Date()
    currentDate.setHours(0, 0, 0, 0)

    for (let task of cart) {
        const taskDate = new Date(task.deadline)
        taskDate.setHours(0, 0, 0, 0)

        if (currentDate > taskDate) {
            task.status = "Overdue"
        }
    }

    renderCart(cart)

})

btnRemoveLastTask.addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Cart is empty!")
        return
    }
    cart.pop();
    renderCart(cart);
});

inputFilterTask.addEventListener("change", (event) => {
    const selectValue = event.target.value
    const tasks = cart.filter(task => task.status.toLowerCase().includes(selectValue.toLowerCase()))
    renderCart(tasks)
})

function renderCart(taskList) {
    list.innerHTML = "";

    for (let task of taskList) {

        let listItemName = document.createElement("li");
        listItemName.innerText = task.name;
        list.appendChild(listItemName);

        let listItemCategory = document.createElement("li");
        listItemCategory.innerText = task.category;
        list.appendChild(listItemCategory);

        let listItemDeadline = document.createElement("li");
        listItemDeadline.innerText = task.deadline;
        list.appendChild(listItemDeadline);

        let listItemStatus = document.createElement("li");
        listItemStatus.innerText = task.status;
        list.appendChild(listItemStatus);

        let listItemSeparator = document.createElement("span");
        listItemSeparator.innerText = "---------------------------------"
        list.appendChild(listItemSeparator)
    }

    inputName.value = ""
    inputCategory.value = ""
    inputDeadline.value = ""

}


