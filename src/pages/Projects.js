import React from "react";



const Projects = () => {
    return (
    <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                <h5 className="card-title"><a rel="noreferrer" href="https://github.com/davitlabadze/blog" target="_blank">
                <img
                    src="https://github.com/davitlabadze/blog/blob/master/app%20screen/backend.png?raw=true"
                    className="card-img-top"
                    alt="..."
                /></a></h5>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <h5 className="card-title"><a rel="noreferrer" href="https://github.com/davitlabadze/CRUD" target="_blank">
                <img
                    src="https://github.com/davitlabadze/CRUD/blob/master/app%20screen/crud.png?raw=true"
                    className="card-img-top"
                    alt="..."
                /></a></h5>
                </div>
            </div>
            </div>

       </div>

        
    )
}

export default Projects