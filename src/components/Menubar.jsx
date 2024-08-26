import React from 'react'
import { Link } from 'react-router-dom'

function Menubar() {
  return (
    <div className='container-fluid'>
    <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <li><Link to="/blogpost">Blogpostpage</Link></li> */}

    </ul>
    </div>
  )
}

export default Menubar