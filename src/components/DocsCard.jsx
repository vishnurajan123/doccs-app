import React, { useEffect, useState } from 'react'
import { firestore } from "../firebase";
import { getDocs,collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function DocsCard({doce,setMovieAdded}) {

  const [show, setShow] = useState(false);
  const [updatedTitle,setUpdatedTitle]=useState("")
  const dispatch=useDispatch()

  const [des,setDes]=useState(doce.description)

  const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  const doccsRef=collection(firestore,"doccs")
 const deleteDoccs= async (id)=>{
  const textDoc=doc(firestore,"doccs",id);
  await deleteDoc(textDoc)
  setMovieAdded(true)
  
 }

 const handleUpdate=async (id)=>{
  const textDoc=doc(firestore,"doccs",id);
  await updateDoc(textDoc,{title:updatedTitle})
  setMovieAdded(true)

 }
 console.log(doce);
 var cleanText = doce.description.replace(/<\/?[^>]+(>|$)/g, "");

 
  return (
  <>
     
      
          <div className='doccard mt-5'>
              <div className='d-flex btt'>
                 <button  onClick={handleShow} className='btn one'> <i class="fa-solid fa-pen-to-square"></i></button>
                 <button onClick={()=>deleteDoccs(doce.id)} className='btn two'> <i class="fa-solid fa-trash"></i></button>
                  
                  </div>

                  <Link to={`/docs/${doce?.id}`}>
            <div className='lii'>
                <h5 >{doce.title}</h5>
                <p>{cleanText.slice(0,50)}</p>
            </div>
              </Link>
          </div>
       
     
      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      className='shadow-3'
    >
      <Modal.Header closeButton>
        <Modal.Title>Doccument title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <TextField onChange={(e)=>setUpdatedTitle(e.target.value)}    className='form-control border-dark border-2' id="outlined-basic" label="Doccument title" variant="outlined" />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={(e)=>handleUpdate(doce.id)}  variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default DocsCard