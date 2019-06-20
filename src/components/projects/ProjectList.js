import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) =>{
    return(
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/'+project.id} key={project.id}>
                        <ProjectSummary project={project}/>
                    </Link>
                )
            })}
        </div>
    )
}//key should always be attatched to the parent tag do therefore key is attatched to Link

export default ProjectList