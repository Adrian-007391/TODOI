 import React, {useState} from 'react'
import './List.css'
import {setDoc,doc, getDocs, collection, getDoc}from 'firebase/firestore'
import {db} from '../../firebase'
type Listtype ={
    name:string,
    isactive:boolean,
    id:string,
    activelist:any
}
function List(props:Listtype){
    const setactivelist = async ()=>{
        await setDoc(doc(db,"lists",props.activelist.id),{
            name:props.activelist.data().name,
            isactive:false
        });
        await setDoc(doc(db,"lists",props.id),{
            name:props.name,
            isactive:true,
        })

        
    }
    return(
        <div onClick={()=>setactivelist()}className={props.isactive?"List__isactive":"List"}>
            {props.name}
			 </div>
    )

}
export default List
