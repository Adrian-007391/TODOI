import {collection, onSnapshot} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import './App.css'
import {db} from './firebase'
import Sidebar from './Componentes/Sidebar/Sidebar'
function App() {
  const [activelist,setactivelist]= useState<any>({});
  const getlists=()=>{
    onSnapshot(collection(db, "lists"), doclist=>{
      doclist.forEach(document=>{
        if(document.data().isactive ==true){
          setactivelist({...document.data(),id:document.id})
        }
      })
    })
  }
  useEffect(getlists,[])
  return(
    <div className='App'>
      <Sidebar/>
      <div className='App__div--content'>
        <h1>
          {activelist.name}
        </h1>
      </div>
    </div>
  )
}

export default App
