import React from 'react'


function TodoItem(props){
    const pStyle={
        fontStyle: "italic",
        color: "grey",
        textDecoration: 'line-through'
    }
    
    return(
        
    <div className="todo-item">
        <input 
            type="checkbox" 
            checked = {props.item.completed} 
            onChange={()=>props.handleChange(props.item.id)}
        />
        <p style={props.item.completed? pStyle : {}}>{props.item.placeholder}</p>
    </div>)
}
export default TodoItem