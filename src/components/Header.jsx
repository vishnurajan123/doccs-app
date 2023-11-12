import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='hhh'>
      <nav style={{padding:"10px"}} class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <Link to={'/'} class="navbar-brand text-light" ><i class="fa-regular fa-file-lines hh me-1"></i>DOCCS-HANDLE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item ">
<Link
          to={'/'}  class="nav-link active text-light" aria-current="page" ><span className='hhh'>Home</span>
  
</Link>        </li>
        <li class="nav-item">
        <Link
          to={'/doccument'}  class="nav-link active text-light" aria-current="page" ><span className='hhh'>Doccuments</span>
  
</Link>        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header