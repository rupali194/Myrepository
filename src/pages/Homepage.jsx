import React, { useState } from 'react'
import Menubar from '../components/Menubar'
import edu1 from "../assets/residential/edu1.jpeg"
import edu2 from "../assets/residential/edu2.jpeg"
import edu3 from "../assets/residential/edu3.jpeg"
import Blogpost from '../components/Blogpost'

function Homepage() {

  const [blogs] =useState([

     
   
    {id:1 , imageurl: edu1, title: "first blog" , paragraph: "Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new."}, 
    {id:2 , imageurl: edu2, title: "second blog" , paragraph: "Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion."},
    {id:3 , imageurl: edu3, title: "third blog" , paragraph: "Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look."}

  

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