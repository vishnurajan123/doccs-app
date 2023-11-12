import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div  className='d-flex justify-content-center align-items-center flex-column foot container'
    style={{width:"100%"}}
    >
        <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
            <div style={{width:"400px"}} className='website'>
                        <h4> <i class="fa-regular fa-file-lines hh me-1"></i>DOCCS-HANDLE</h4>
  
   
<p>
     Currently v5.3.2.
    
</p>
            </div>
            <div className='links d-flex flex-column'>
                <h4>Links</h4>
                <Link to={'/'} className='' style={{textDecoration:"none",color:"black"}} >Home</Link>
                <Link to={'/doccument'} className='' style={{textDecoration:"none",color:"black"}} >Doccuments</Link>




            </div>
            <div className='guids d-flex flex-column'>
            <h4>Guide</h4>
                <Link to={'https://react-bootstrap.github.io/'} className='' style={{textDecoration:"none",color:"black"}} >React</Link>
                <Link to={'https://react-bootstrap.github.io/'} className='' style={{textDecoration:"none",color:"black"}} >React Bootstrap</Link>

                <Link to={'https://react-bootstrap.github.io/'} className='' style={{textDecoration:"none",color:"black"}}>Routing</Link>

            </div>
            <div className='contact d-flex flex-column'>
            <h4>Contact</h4>
            <div>
                
                <input type="text" placeholder='Enter your Mail' className='rounded p-1' />
                <button className='btn btn-dark  rounded ms-1' style={{width:"100px",height:"38px",padding:"0px" }}>Subscribe</button>
                  
            </div>  

            </div>

        </div>
        <p className='mt-4'>Copyright © 2023 DOCCS-HANDLE. Built with React.</p>



    </div>
  )
}

export default Footer