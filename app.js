
//Task 3
let cart = []

let btnAddTask = document.getElementById("btnAddTask")
let btnRemoveTask = document.getElementById("btnRemoveTask")
let btnUpdateTask = document.getElementById("btnUpdateTask")

let list = document.getElementById("list")
const listItems = document.querySelectorAll('#list li')

let inputName = document.getElementById("inputTaskName")
let inputCategory = document.getElementById("inputTaskCategory")
let inputDeadline = document.getElementById("inputTaskDeadline")
let selectStatusElement = document.getElementById("inputTaskStatus")


btnAddTask.addEventListener("click", function () {
    let taskName = inputName.value;
    let taskCategory = inputCategory.value
    let taskDeadline = inputDeadline.value
    let selectedSatusValue = selectStatusElement.value;

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
    renderCart();
    inputName.value = ""
    inputCategory.value = ""
    inputDeadline.value = ""
    selectStatusElement.value = "Progress"
});


