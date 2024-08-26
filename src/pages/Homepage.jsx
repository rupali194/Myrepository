import React, { useState } from 'react'
import Menubar from '../components/Menubar'
import edu1 from "../assets/residential/edu1.jpeg"
import edu2 from "../assets/residential/edu2.jpeg"
import edu3 from "../assets/residential/edu3.jpeg"
import Blogpost from '../components/Blogpost'

function Homepage() {

  const [blogs] =useState([

     
   
    {id:1 , imageurl: edu1, title: "first blog" , paragraph: "paragraph of first blog"}, 
    {id:2 , imageurl: edu2, title: "second blog" , paragraph: "paragraph of first blog"},
    {id:3 , imageurl: edu3, title: "third blog" , paragraph: "paragraph of first blog"}

  

  ])
  

  return (

   <div className='home'>
    <Menubar />
    {/* <Herosection /> */}
    <div className='new'>
      {blogs.map(blog =>(
        <Blogpost
            imageurl={blog.imageurl}
            title={blog.title}
            paragraph={blog.paragraph}
            id={blog.id}
            key={blog.id}
            

        />

    ))}
  </div>
    </div>

  )
}

  

export default Homepage