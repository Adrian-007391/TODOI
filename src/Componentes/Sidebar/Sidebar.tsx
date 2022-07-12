import React, {useEffect, useState} from 'react'
import './Sidebar.css'
import {db} from '../../firebase'
import {onSnapshot , collection ,setDoc, doc} from 'firebase/firestore'
import List from '../list/List';
import {GrAddCircle} from 'react-icons/gr'
function Sidebar(props:any){
    type list = {
        name :string,
        isactive:boolean,
        tasks:[object]|[],
    }
    const [lists , setlists] = useState<object>([]);
    let docs:[object]|[] =[];
    const getlists:any= () =>{
        onSnapshot(collection(db,"lists"),doclist=>{
            setlists([])
            docs =[];
            doclist.forEach(docitem=>{
                if(docitem.data().isactive ==true){
                    props.setactivelist(docitem)
                }
                docs.push({...docitem.data(),id:docitem.id})

            })
            setlists(docs);

        })
    }
    useEffect(()=>getlists() , [])
    const addlistitem= async ()=>{  
        const name:string|null = prompt("Cual sera el nombre de tu lista");
        if (name == "" ){
            alert("necesitas poner un nombre para la lista")
        }
        else if(name== null){
        }
        else {

            const data:list= {
                name:name,
                isactive:false,
                tasks:[],
            } 
            const id:string = (Math.random()*10000).toString() 
            await setDoc(doc(db, "lists",id),data)
        }
        
    }
    return(
       <div className='Sidebar'>
           <div className='Sidebar__div--topbar'>
               <strong>TODOI MENU</strong>
           </div>
           <div className='Sidebar__div--listcontainer'>
                <a className='Sidebar__a--lists'>lists</a>
               {lists.map(
                   e=>(
                       <List activelist={props.activelist}id = {e.id}isactive={e.isactive}name = {e.name} key={e.id}/>
                   )
               )}
           </div>
           <button className='Sidebar__button' onClick={()=>addlistitem()}>
               <GrAddCircle className='Sidebar__icon'/>
               add list
           </button>
			 </div>
    )

}
export default Sidebar
