import React from 'react'
import TodoItem from "./components/TodoItem"
import todosData from './components/todosData'


class App extends React.Component{
  constructor(){
    super()
    this.state= {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id){
    
    this.setState(prevState=>{
      const updateTodos=prevState.todos.map(items=>{
        
        if(items.id === id){
          items.completed = !items.completed;
        }
        return items

      })
      return{
        todos: updateTodos
      }
      
    })
  }
  
  render(){
    const todoItem = this.state.todos.map(items=>{
      
      return (<TodoItem 
        item={items}
        key = {items.id} 
        handleChange={this.handleChange}/>)
      })
    return(
      <div className="todo-list">
        {todoItem}
      </div>
    )
  }

}
export default App
