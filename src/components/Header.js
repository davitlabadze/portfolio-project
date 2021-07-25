import React from "react";
import { IconContext } from "react-icons";
import { FaGithub,FaTwitter,FaLinkedin,FaFilePdf} from "react-icons/fa";

const Header = () => {
    return (
        <IconContext.Provider value={{ color:"black",size: "2rem"}}>
        <header>
            
            <div className="text-center">
                <img src="img/avatar.jpeg" className="rounded-circle mt-3 p-1" alt="" width="260" height="260" border="2" />
                <div className="media"><a rel="noreferrer" href="https://github.com/davitlabadze"  target="_blank" ><FaGithub/></a> </div>
                <div className="media"><a rel="noreferrer" href="https://twitter.com/David47306139"  target="_blank" ><FaTwitter color="#1DA1F2"/></a> </div>
                <div className="media"><a rel="noreferrer" href="https://www.linkedin.com/in/davit-labadze-03a09678/"  target="_blank" ><FaLinkedin color="#2867B2"/></a> </div>
                <div className="media"><a rel="noreferrer" href="https://github.com/davitlabadze/portfolio-project/blob/master/public/resume/resume.pdf"  target="_blank" ><FaFilePdf color="#ff0000"/></a> </div>



                <h1>Davit's Portfolio</h1>
            </div>
        
            
        </header>
        </IconContext.Provider>
        
    )
}

export default Header