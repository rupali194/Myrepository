import React from 'react'
import { Link } from 'react-router-dom'

function Blogpost({imageurl,title,paragraph,id}) {
  return (
    
    <div className='blog_post'>
      <img src={imageurl} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Link to={`/blog/${id}`}>Read more</Link>
    </div>
    
  )
}

export default Blogpost