import React, { useState, useEffect } from "react";
function Todo() {
    let user = JSON.parse(sessionStorage.getItem('user')),
        [tasks, setTasks] = useState(JSON.parse(sessionStorage.getItem('tasks')))
    let todo_items = document.querySelector(".todo_items")
    function clear() {
        sessionStorage.setItem("tasks", JSON.stringify([]))
        tasks = []
    };
    function AddTask() {
        let input = document.querySelector(".todo_text")
        if (!input.value) {
            return
        }
        let tasks = JSON.parse(sessionStorage.getItem('tasks'))
        setTasks(tasks.push({
            content: input.value,
            done: false,
        }))
        sessionStorage.setItem('tasks', JSON.stringify(tasks))
    };
    return user.confirm ? (
        <div className="todo">
            <div className="todo_input">
                <p className="name">Здравствуйте {user.name}</p>
                <input className="todo_text" placeholder="Введите задачу..." type="text" />
                <button type="submit" className="todo_add" onClick={AddTask}>Добавить задачу</button>
                <button type="submit" className="clear" onClick={clear}>Очистить задачи</button>
            </div>
            <ul className="todo_items">{
                JSON.parse(sessionStorage.getItem('tasks')).map(el => (
                    <div>
                        <li className={el.done ? "done" : ""} onClick={(elem) => { elem.target.className = "done"; el.done = true; sessionStorage.setItem("tasks", JSON.stringify(tasks)) }}> {el.content}</li>
                    </div>
                ))
            }</ul >
        </div >
    ) : <div></div>
}
export default Todo