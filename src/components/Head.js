import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <Link className="nav-link active" to={"/"}>MZC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            
        <Link className="nav-link active" to={"/"}>Add Book</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/search"}>Search Book</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={"/view"}>View Book</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Head