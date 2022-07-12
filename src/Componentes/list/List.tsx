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
        if (props.activelist==undefined){
            await setDoc(doc(db,"lists",props.id),{
                name:props.name,
                isactive:true,
            })
        }
        else if(props.activelist.name ==props.name){
            await setDoc(doc(db,"lists",props.id),{
                name:props.name,
                isactive:false,
            })

        }
        else {
            await setDoc(doc(db,"lists",props.activelist.id),{
                name:props.activelist.name,
                isactive:false
            });
            await setDoc(doc(db,"lists",props.id),{
                name:props.name,
                isactive:true,
            })
        }

        
    }
    return(
        <div onClick={()=>setactivelist()}className={props.isactive?"List__isactive":"List"}>
            {props.name}
			 </div>
    )

}
export default List
