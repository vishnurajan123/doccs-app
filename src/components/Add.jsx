import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { firestore } from "../firebase";
import { collection, addDoc } from 'firebase/firestore';
import { TextField } from '@mui/material';


function Add({setMovieAdded}) {
    const [title,setTitle]=useState("")


       
       const [show, setShow] = useState(false);
       const doccsRef=collection(firestore,"doccs")


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleSave=async ()=>{
  try{
    await addDoc(doccsRef,{
      title:title,
      description:""
    })
    setMovieAdded(true)
  }
  catch (err){
    console.error(err)
  }
   

}

return (
  <>
    <Button variant="primary" onClick={handleShow}>
     Add new Doccument
    </Button>

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
       <TextField onChange={(e)=>setTitle(e.target.value)}   className='form-control border-dark border-2' id="outlined-basic" label="Doccument title" variant="outlined" />

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={handleSave} variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default Add