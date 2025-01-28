import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Routing() {
  return (
    <Router>
         <div>Routing
         <nav>
            <ul>
                <li>
                    <Link to = "/">Home page</Link>
                </li>

                <li>
                    <Link to = "/about">About</Link>
                </li>
            </ul>
         </nav>
         </div>

    <Routes>
        <Route path= "/" element = {<Home/>}></Route>
        <Route path= "/about" element = {<About/>}></Route>

    </Routes>
    </Router>
   
  )
}

export default Routing

function Home(){
    return <h1>Home page fellas</h1>
}

function About (){
    return <h1> about sakshi </h1>
}