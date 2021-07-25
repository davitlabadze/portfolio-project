
import React from "react";
import { IconContext } from "react-icons";
import { FaPhp,FaLaravel,FaReact,FaLinux,FaHtml5,FaCss3,FaJs,FaBootstrap} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Skills = () => {
    return (
        <IconContext.Provider value={{ color:"black",size: "5rem"}}>
        <div className="container mt-5"> 
            <div className="d-flex justify-content-center mt-3 animate">
                <div className="p-2"><FaPhp color="#474A8A" /><p id="p2">Php</p></div>
                <div className="p-2"><FaLaravel color="#fb503b" /><p id="p1">Laravel</p> </div>
                <div className="p-2"><SiMysql /><p id="p1">Mysql</p> </div>
                <div className="p-2"><FaLinux/><p id="p1"> Linux</p></div>
                <div className="p-2"><FaHtml5 color="#e34f26"/><p id="p1"> Html</p></div>
                <div className="p-2"><FaCss3 color="#264de4"/><p id="p1"> Css</p></div>
                <div className="p-2"><FaJs color="#f0db4f "/><p>Javascript</p></div>
                <div className="p-2"><FaReact color="skyblue" /><p id="p1"> React</p></div>
                <div className="p-2"><FaBootstrap color="#563d7c"/><p> Bootstrap</p></div>
            </div>
        </div> 
        </IconContext.Provider>
    )
}

export default Skills