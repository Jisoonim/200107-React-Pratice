//출력용 컴포넌트
import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, oper}) => {

    const list = todos.map(t => <li key={t.tno}> <Todo todo={t} oper = {oper}></Todo> </li>)



    return (
        <ul className = 'todoList'>
           {list}
        </ul>

    )
}

export default TodoList