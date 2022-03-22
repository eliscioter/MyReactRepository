import React from 'react'
import Todo from "./Todo"

export default function TodoList({todoList, todoStatus}) {
    return (
        
        todoList.map(todo => {
            return <Todo key={todo.id} todoStatus={todoStatus} todoTask={todo}/>
        })
    )
}
