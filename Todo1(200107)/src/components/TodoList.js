//출력용 컴포넌트
import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, oper}) => {

    const filter = () => {
        if(!oper.type) {
            return todos
        }
        if(oper.type === 'D') { //DONE 출력
            return todos.filter(t => t.done === true)
        }
        if(oper.type === 'Y') { //YET 출력
            return todos.filter(t => t.done === false)
        }
        return todos //else ALL
    }

    const list = filter().map(t => <li key={t.tno}> <Todo todo={t} oper = {oper}></Todo> </li>)



    return (
        <ul className = 'todoList'>
           {list}
        </ul>

    )
}

export default TodoList