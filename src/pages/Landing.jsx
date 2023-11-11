import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='d-flex justify-content-center '>
        <Link to={'/doccument'}><button className='btn btn-dark'>Start</button></Link>
    </div>
  )
}

export default Landing