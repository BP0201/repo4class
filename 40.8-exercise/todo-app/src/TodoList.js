import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo'
import { v4 as uuid } from 'uuid'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const add = (todo) => {
        const newTodo = { ...todo, id: uuid() }
        setTodos(todos => [...todos, newTodo])
    }
    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const todoList = todos.map(todo => (
        <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            handleRemove={remove}
        />
    ))

    return (
        <div>
            <h1>Add to To Do List!</h1>
            <NewTodoForm addTodo={add} />
            <h2>Todo List:</h2>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

export default TodoList;