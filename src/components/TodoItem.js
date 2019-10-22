import React from 'react'


function TodoItem(props){
    return(
    <div className="todo-item">
        <input type="checkbox" checked = {props.completed} onChange={()=>console.log("changed!")}/>
        <p>{props.placeholder}</p>
    </div>)
}
export default TodoItem