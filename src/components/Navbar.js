import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container justify-content-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="porfolio-project/about" className="nav-link">
                                <p>About me</p>
                            </Link> 
                        </li>
                        <li className="nav-item ">
                        <Link to="porfolio-project/skills" className="nav-link">
                                <p>Skills</p>
                            </Link>
                            
                        </li>
                        
                        <li className="nav-item">
                            <Link to="porfolio-project/projects" className="nav-link">
                                <p>Projects</p>
                            </Link> 
                        </li>

                        

                        

                        

                    </ul>
                </div>
            </div>
    </nav>
    )
}

export default Navbar
