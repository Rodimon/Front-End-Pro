
const start = document.querySelector(".start"),
    start_button = start.querySelector("button"),
    start_input = start.querySelector("input"),
    todo = document.querySelector(".todo"),
    input = todo.querySelector(".todo_text"),
    button = todo.querySelector(".todo_add"),
    name = todo.querySelector(".name"),
    todo_items = todo.querySelector(".todo_items"),
    clear = todo.querySelector(".clear")
tasks = JSON.parse(sessionStorage.getItem('tasks'))
user = JSON.parse(sessionStorage.getItem('user'))
if (user) {
    start.style.visibility = "hidden"
    todo.style.visibility = "visible"
    name.innerHTML = `Здравствуйте ${user}`
}
if (!tasks) {
    tasks = []
}
tasks.forEach((el) => {
    let li = document.createElement("li"),
        done = document.createElement("button")
    done.type = "sumbit"
    todo_items.appendChild(li)
    if (el.done) {
        li.innerHTML = el.content
        li.className = "done"
    } else {
        li.innerHTML = el.content
        li.addEventListener("click", function () {
            li.className = "done"
            el.done = true
            sessionStorage.setItem("tasks", JSON.stringify(tasks))
        })
    }
});
start_button.addEventListener("click", function () {
    start.style.visibility = "hidden"
    todo.style.visibility = "visible"
    sessionStorage.setItem('user', JSON.stringify(start_input.value))
    let user = JSON.parse(sessionStorage.getItem('user'))
    if (!user) {
        user = [{ name: `Anonymous` }]
    }
})
button.addEventListener("click", function () {
    if (!input.value) {
        return
    }
    tasks.push({
        content: input.value,
        done: false,
    })
    sessionStorage.setItem('tasks', JSON.stringify(tasks))
    todo_items.innerHTML = null
    tasks.forEach(el => {
        let li = document.createElement("li"),
            done = document.createElement("button")
        done.type = "sumbit"
        todo_items.appendChild(li)
        if (el.done) {
            li.innerHTML = el.content
            li.className = "done"
        } else {
            li.innerHTML = el.content
            li.addEventListener("click", function () {
                li.className = "done"
                el.done = true
                sessionStorage.setItem("tasks", JSON.stringify(tasks))
            })

        }
    });
})
clear.addEventListener("click", function () {
    todo_items.innerHTML = null
    sessionStorage.setItem("tasks", JSON.stringify([]))
    tasks = []
})