import React from 'react'
import MyResume from "../../Assets/aarondenney_resume.pdf"

const Resume = () => {
    return (
        <div className = 'my-resume'>
            <img src= {MyResume} alt = 'resume'/>
        </div>
    )
}

export default Resume