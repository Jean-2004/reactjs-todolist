import React, { useState } from 'react'

export default function ToDoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Escreva o nome da tarefa..."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Adicionar</button>
        </header>
    )
}