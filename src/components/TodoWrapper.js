import React, {useState} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

//20.01.07(화) TODO Pratice

const TodoWrapper = () => {

    const [todos, setTodos] = useState([{tno: 1, title: 'Study Hard....', done: true}])

    return (
        <div>
            <h1>Todo Wrapper Component</h1>
            <TodoInput></TodoInput>
            <TodoList todos = {todos}></TodoList>
        </div>

    )
}
export default TodoWrapper
