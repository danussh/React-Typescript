import React from "react"
interface Props{
    lists:{
        name: string,
        age: number
      },
    deleteTodo(name:string):void  
}
const Todo = ({lists,deleteTodo}:Props) => {
    return (
        <div>
           My Name is {lists.name} and Age is {lists.age}<button type="button" className="btn btn-danger" onClick={()=>{deleteTodo(lists.name)}}>Delete</button>
        </div>
    )
}

export default Todo

