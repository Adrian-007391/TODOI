import {collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import './App.css'
import {db} from './firebase'
import Sidebar from './Componentes/Sidebar/Sidebar'
import Taskcontainer from './Componentes/taskcontainer/Taskcontainer'
function App() {
  const [activelist,setactivelist]= useState<any>(undefined);
  const getlists=()=>{
    onSnapshot(collection(db, "lists"), doclist=>{
      doclist.forEach(document=>{
        if(document.data().isactive ==true){
          setactivelist({...document.data(),id:document.id})
        }
      })
    })
  }
  const deletelist = async ()=>{
    await deleteDoc(doc(db,"lists" , activelist.id))
    setactivelist(undefined)
  }
  useEffect(getlists,[])
  return(
    <div className='App'>
      <Sidebar activelist={activelist} setactivelist={setactivelist}/>
      <div className='App__div--content'>
        <h1>
          {activelist?activelist.name:""}
        </h1>
        <button  onClick={deletelist}className='App__button--delete'>delete list</button>
        <Taskcontainer list = {activelist?activelist:undefined}/>
      </div>
    </div>
  )
}

export default App
