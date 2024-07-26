import React, { useState } from 'react';

export function Todo(){
    const[todo,setTodo]=useState([]);
    const[input,setInput]=useState(''); 
    const[edit,setEdit]=useState(false);
    const[editId,setEditId]=useState(null);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!edit){
            setTodo([...todo,{id:todo.length,text:input}]);
            setInput('');
            }
            else{
                setTodo(todo.map((item)=>item.id===editId?{...item,text:input
                    }:item));
                    setEdit(false);
                    setEditId(null);
                    setInput('');
                    }
                    }
                    const handleDelete=(id)=>{
                        setTodo(todo.filter((item)=>item.id!==id));
                        }
                        const handleEdit=(id)=>{
                            const sameItem=todo.find((item)=>item.id===id);
                            setEdit(true);
                            setEditId(id);
                            setInput(sameItem.text);
                            }
                            return(
                                <div>
                                    <h1>Todo List</h1>
                                    <form onSubmit={handleSubmit}>
                                        {edit?(
                                            <input type="text" value={input} onChange={(e)=>setInput(e.target.value
                                                )} />
                                                ):(
                                                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value
                                                        )} />
                                                        )}
                                                        <button type="submit">{edit?'Update':'Add'}</button>
                                                        </form>
                                                        <ul>
                                                            {todo.map((item)=>(
                                                                <li key={item.id}>{item.text}
                                                                <button onClick={()=>handleEdit(item.id)}>Edit</button>
                                                                <button onClick={()=>handleDelete(item.id)}>Delete</button>
                                                                </li>
                                                                ))}
                                                                </ul>
                                                                </div>
                                                                )
}

//Without edit button method
    
// import { useState } from "react";
// export const Todo = ()=> {
//     const [todos, setTodos] = useState([])
//     const [inputValue, setInputValue] = useState('')
  
//   function handleChange(e){
//     setInputValue(e.target.value)
//   }
  
//   function handleSubmit(e){
//     e.preventDefault()
//     setTodos([...todos, inputValue])
//     setInputValue('')
//   }
  
//   function handleDelete(index){
//     const newTodos = [...todos]
//     newTodos.splice(index, 1)
//     setTodos(newTodos)
//   }
//     return (
//       <div className="Todolist">
//         <h1>Todo List</h1>
//         <form>
//           <input type='text' value={inputValue} onChange={handleChange}/>
//           <button onClick={handleSubmit}>Add Todo</button>
//         </form>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo}
//             <button onClick={() =>handleDelete(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
