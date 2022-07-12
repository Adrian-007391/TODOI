 import {doc, getDoc, setDoc} from 'firebase/firestore'
import React, {useState} from 'react'
import {db} from '../../firebase'
import './Taskcontainer.css'

 function Taskcontainer(props:any){
     const [inp , setinp]=useState("")
     const handlechange=(event)=>{
         setinp(event.target.value)

     }
     const addtask=(e)=>{
        e.preventDefault()
         if(props.list!=undefined){
             setDoc(doc(db,"lists",props.list.id),
                    {
                        name:props.list.name,
                        isactive:true,
                        tasks:[...props.list.tasks,
                            {
                                taskname:inp,
                                isdone:false
                            }
                        ]

                    }
                   )
            
         }
         setinp("")
     }
    return(
       <div className='Taskcontainer'>
           <div className='Taskcontainer__div--tasks'>
           {props.list?props.list.tasks.map(e=>(<h1>{e.taskname}</h1>)):(<h1>TODOI</h1>)} 
           </div>

               <form onSubmit={e=>addtask(e)}>
                   <input className='Taskcontainer__input'placeholder='write a task'value={inp} onChange={e=>handlechange(e)}></input>
               </form>
       </div>
    )

}
export default Taskcontainer
