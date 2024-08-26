import React from 'react'
import Menubar from '../components/Menubar'
import { useParams } from 'react-router-dom';

function Blogpostpage() {

    const blogData = [

      {id:1, title:"First blog page",content: "uuefheihfek jbfksuhf kjefkjefbe fjnbf jffkfg djkf vjkvg djfj"},
      {id:2, title:"Second blog page",content: "uuefheihfek jbfksuhf kjefkjefbe fjnbf jffkfg djkf vjkvg djfj"},
      {id:3, title:"Third blog page",content: "uuefheihfek jbfksuhf kjefkjefbe fjnbf jffkfg djkf vjkvg djfj"},

    ]

    const {id} = useParams();

    const blogCard = blogData.find(blog => blog.id === parseInt(id))

    if(!blogCard) return <h2>This page is not found</h2>

  return (
    <div>

    <Menubar />
    <h1>Blog Card {id}</h1>
    <h1>{blogCard.title}</h1>
    <p>{blogCard.content}</p>
    </div>
  )
}

export default Blogpostpage