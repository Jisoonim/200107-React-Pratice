import React, {useState} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoMenu from './TodoMenu'

//20.01.07(화) TODO Pratice

let sequence = 0

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])
    const [type, setType] = useState('A')

    const changeType = (typeValue) => {
        // console.log("TYPE: " + type)
        setType(typeValue)
    }

    const addTodo = (title) => {
       const newTodo = {tno: ++sequence, title: title, done: false}
        setTodos(todos.concat(newTodo))

    }

    const deleteTodo = (tno) => {
        setTodos(todos.filter(t => t.tno !== tno ))

    }

    const updateDone = (tno) => { //클릭시 가운데 줄 생성(완료됨)
        console.log("updateDone: " + tno)
         const target = todos.filter(t => t.tno === tno)[0]
         target.done = !target.done
         console.log(todos)
         const newTodos = todos.slice()
         setTodos(newTodos)

    }

    const oper = {deleteTodo, updateDone, type}

    return (
        <div>
            <h1 className='top'>Todo Wrapper Component</h1>
            <TodoMenu changeType = {changeType}></TodoMenu>
            <TodoInput addTodo = {addTodo}></TodoInput>
            <TodoList todos={todos} oper = {oper}></TodoList>
        </div>

    )
}
export default TodoWrapper
