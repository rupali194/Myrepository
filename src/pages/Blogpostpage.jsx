import React from 'react'
import Menubar from '../components/Menubar'
import { useParams } from 'react-router-dom';

function Blogpostpage() {

    const blogData = [
    

      {id:1, title:"First blog page",content: "Create a beautiful blog that fits your style. Choose from a selection of easy-to-use templates – all with flexible layouts and hundreds of background images – or design something new."},
      {id:2, title:"Second blog page",content: "Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion."},
      {id:3, title:"Third blog page",content: "Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look."},

      
    ]

    const {id} = useParams();

    const blogCard = blogData.find(blog => blog.id === parseInt(id))

    if(!blogCard) return <h2>This page is not found</h2>

  return (
    <div>

    <Menubar />
    <div className='container' style={{backgroundColor:" thistle",height:"600px"}}>
    <h1>Blog Card {id}</h1>
    <h1>{blogCard.title}</h1>
    <p>{blogCard.content}</p>
    </div>
    </div>
  )
}

export default Blogpostpage