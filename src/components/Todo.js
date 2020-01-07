import React from 'react'

const Todo = ({todo}) => {

    const style = {
        backgroundColor : "red"
    }

    return (
        <div>
            <input type = 'checkbox'></input>
            <span style={style}>{todo.title}</span>
            <button>DELETE</button>
        </div>
    )
}
export default Todo