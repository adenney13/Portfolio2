import React from 'react'
import TornadosFCPic from '../../Assets/TornadosFC.png'

const TornadosFC = () => {
    return (
        <div>
        <h3>Tornados FC Web Site </h3>
            <div className = 'tornados-fc'>
            <img src = {TornadosFCPic} className = 'tornados-fc-pic' alt= 'tornados fc' />
            <p className = 'project-desc'>For my final project, I built a full-stack web page for my dad's soccer club, Tornados FC. Parents and players can come to the web page to view team game and practice schedules as well as the roster. The admin function can be used to create and delete information as desired by the admin. (Working on authorization for admin to be password protected) 
            <br />
            <br />
            <a href = 'https://tornados-fc.herokuapp.com/'>Visit Tornados FC online!</a>
            <br />
            <br />
            Technologies Used: React on Rails
            </p>
        </div>
        </div>
    )
}

export default TornadosFC