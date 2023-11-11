import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Quill } from 'react-quill';
import 'quill/dist/quill.snow.css'; 
import { useQuill } from 'react-quilljs';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { firestore } from "../firebase";
import { updateDoc,getDocs,collection,doc } from 'firebase/firestore';


const TOOLBAR_OPTIONs=[
  [{ heafer:[1,2,3,4,5,6,false]}],
  [{font:[]}],
  [{list:"ordered"},{list:"bullet"}],
  ["bold","italic","underline"],
  [{color:[]},{background:[]}],
  [{script:"sub"},{script:"super"}],
  [{align:[]}],
  ["blockquote","code-block"],
  ["clean"]
]

function Docs() {
 
  

const {id}=useParams()
  const [value,setValue]=useState("")
  const [doclist,setDocList]=useState([]);
  const doccsRef=collection(firestore,"doccs")

  const { quill, quillRef } = useQuill(

    {
      modules:{
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ align: [] }],
        
            [{ list: 'ordered'}, { list: 'bullet' }],
            [{ indent: '-1'}, { indent: '+1' }],
        
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }],
        
            ['clean'],
          ]
      }
    }
    
  );
  
  React.useEffect(() => {
    

    if (quill) {
      quill.on('text-change', () => {
       
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setValue(quillRef.current.firstChild.innerHTML)

        
        
      });
      
    }
    quill?.clipboard.dangerouslyPasteHTML(doclist)
    getDocsList()

    
  }, [quill,doclist]);

  const getDocsList= async ()=>{
    try{
      const data=await getDocs(doccsRef)
      const filteredData=data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }))
      
      setDocList(filteredData.find(item=>item.id==id).description)
    }
    catch(err){
      console.error(err);
    }


  }

  const handleChange=async (id)=>{
    const textDoc=doc(firestore,"doccs",id);
    await updateDoc(textDoc,{description:value})
  
   }


console.log(doclist); 
  return (
    <div>
        <div className='but'>
        <Link to={'/doccument'}><button className='btn btn-primary p-2 ps-3 pe-3 m-1' >BACK</button></Link>
            
            <button className='btn btn-primary p-2 ps-3 pe-3 m-1' onClick={()=> handleChange(id)}>SAVE</button>
       
        </div>
        <div  className='container'  ref={quillRef}></div>
    </div>
  )
}

export default Docs