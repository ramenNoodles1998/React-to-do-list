import React from 'react'
import TodoItem from "./components/TodoItem"
import todosData from './components/todosData'


class App extends React.Component{
  constructor(){
    super()
    this.state= todosData.map(item=>{
      return (<TodoItem key ={item.id} 
        placeholder={item.placeholder}
        completed={item.completed}/>)
    })
  }
  render(){
    return(
      <div className="todo-list">
        {this.state}
      </div>
    )
  }

}
export default App
