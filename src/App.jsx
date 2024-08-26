import './App.css'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogpostpage from './pages/Blogpostpage'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route exact path='/'element = {<Homepage />} />
        <Route exact path='/about' element = {<About />} />
        <Route exact path='/contact' element = {<Contact />} />
        <Route exact path='/blog/:id' element = {<Blogpostpage />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
