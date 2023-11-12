import React, { useEffect, useState } from 'react'
import Add from '../components/Add'
import DocsCard from '../components/DocsCard'
import { firestore } from "../firebase";
import { getDocs,collection } from 'firebase/firestore';


function Doccuments() {

  const [doclist,setDocList]=useState([]);
  const [movieadded,setMovieAdded]=useState(false)

  const doccsRef=collection(firestore,"doccs")

  const getDocsList= async ()=>{
    try{
      const data=await getDocs(doccsRef)
      const filteredData=data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }))
      setDocList(filteredData)
    }
    catch(err){
      console.error(err);
    }


  }


useEffect(()=>{
    setMovieAdded(false)
    getDocsList()

},[movieadded])

  return (
    <div className='container'>
      <div className='d-flex justify-content-center mt-5'> <Add setMovieAdded={setMovieAdded} /></div>
      <div className='d-flex justify-content-evenly flex-wrap'>
        {
          doclist.length>0?doclist.map((doc)=>(
            <DocsCard setMovieAdded={setMovieAdded} doce={doc} id={doc.id}/>
          )): <div className='noitem mt-5 pt-5'>
                <img src="https://lordicon.com/icons/system/regular/52-wrong-file.svg" alt="" />
                <h2>NO <span >FILES</span> ADDED</h2>

          </div>
        }
        

      </div>

    </div>
  )
}

export default Doccuments