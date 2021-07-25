import React from "react";
import { IconContext } from "react-icons";
import { FaDownload } from "react-icons/fa";

const About = () => {
    return (
        <IconContext.Provider value={{ color:"black",size:"1rem"}}>
            <div className="container mt-5"> 
                <div className="justify-content-center mt-3 text">
                

                    <div class="row">
                    <div class="col-md-2"></div>
                        <div class="col-md-8"> 
                            <section className="top-animation">
                                <h4>Hello👋🏼, I am Davit Labadze beginner web developer from Georgia 🇬🇪.</h4>
                                <h4>I'm interested in Full Stack engineering.</h4>
                                <h4>I am currently concentrating on backend, specifically php / Laravel.</h4>
                            </section>
                            <section className="mt-5">
                            <img className="left" src="https://cdn.gweb.ge/buffer/1001285/pictures/logo/17fe58120a3866674e82e4e0d4ef3fa3.png" alt="" />
                            <b className="right">Studying Information Technologies at Business and technology university.</b>
                            </section>
                            
                        </div>
                        <div class="col-md-2 text-center">
                            <a class="btn btn-outline-dark shows" data-mdb-ripple-color="dark" 
                            rel="noreferrer" 
                            href="build/resume/resume.pdf" 
                            target="_blank" 
                            download><h5>Download CV <FaDownload color="#474A8A" /> </h5> </a>
                        </div>
                    </div>
                </div> 
            </div> 
        </IconContext.Provider>
    )
}

export default About