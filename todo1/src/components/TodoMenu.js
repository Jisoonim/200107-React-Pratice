import React from 'react'

//All, DONE, YET(전체, 다 한것, 아직 안한것 메뉴 제작하기)

const TodoMenu = ({changeType}) => {

    const handleClick = (e) => {
        const target = e.target
        // console.log(target.getAttribute("custom-type"))
        changeType(target.getAttribute("custom-type"))

    }

    return (
        <div className = 'menu' onClick = {handleClick}>
            <span custom-type = 'A'>ALL</span>
            <span custom-type = 'D'>DONE</span>
            <span custom-type = 'Y'>YET</span>
        </div>
    )
}
export default TodoMenu