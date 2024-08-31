import { useEffect, useRef, useState } from 'react'
import todoicon from '../assets/todo_icon.png'
import Todoitems from './Todoitems';

function Todo() {

const [todolist ,settodolist] =useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem('todos')) : [] );
 const inputref =useRef();

 const add = () => {
const inputText = inputref.current.value.trim() ;

if(inputText === ''){
  return null ;
}


const newtodo = {
id : Date.now(),
text : inputText ,
iscomplete :false ,
} 

settodolist((prev)=>[...prev , newtodo])

inputref.current.value ='';
 }
 

 const delettodo = (id)=>{

settodolist((prvtodos)=>{
 return prvtodos.filter((todo) => todo.id !== id )
})

}

const toggle =(id)=>{
settodolist((prvtodos)=>{
  return prvtodos.map((todo)=>{

    if(todo.id === id){
      return { ...todo ,iscomplete :!todo.iscomplete}

    }
    return todo ;
    })
})}


useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todolist))
},[todolist])
  return (
    <div className='bg-white gap-7 place-self-center flex max-w-md w-11/12 flex-col p-7 min-h-[500px] rounded-xl'>
        
   <div className='flex items-center py-4'>
   <img className='w-8' src={todoicon} alt="" />
    <h1 className='font-bold text-3xl px-3'>To-Do List</h1>

   </div>
   
 

    <div className='flex  items-center rounded-full bg-gray-200'>
<input ref={inputref} type="text"  className='bg-transparent border-none flex-1 outline-none pl-6 placeholder:texs-salte-600 h-14' placeholder='Add Your Task'/>
<button onClick={add} className='rounded-full bg-orange-600 text-white text-lg cursor-pointer w-32 items-center h-14 font-medium'>ADD +</button>
    </div>

<div>

{todolist.map((item , index)=>{
return <Todoitems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete} delettodo={delettodo} toggle={toggle}/>
})}


</div>


    </div>
  )
}

export default Todo
