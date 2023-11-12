import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
   <>
   <div className='land'>
   <h1 className='text-center headd'> <span className='sp1'>Document</span> <br /> <span className='sp' >Management</span> <br /> System Software
</h1>
   <div className='d-flex justify-content-center '>
    
          <Link to={'/doccument'}><button className=' btsp'>Get Started</button></Link>
      </div>

   </div>


     
   </>
  )
}

export default Landing