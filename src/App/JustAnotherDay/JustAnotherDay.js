import React from 'react'
import JustAnotherDayPic from '../../Assets/JustAnotherDay.png'

const JustAnotherDay = () => {
    return (
        <div>
            <h3>Just Another Day</h3>
            <div className = 'just-another-day'>
                <img src = {JustAnotherDayPic} alt = 'just another day' className = 'just-another-pic'/>
                <p className = 'project-desc'>My first project! Collision detection prevents the player from touching the bad guys, but rewards the player for reaching home. Using the arrow keys, make it from one end of the map to the other without touching the sad faced bullies! 
                <br />    
                <br />
                    <a href = 'https://pages.git.generalassemb.ly/adenney13/Just-Another-Day/code/landing.html'>Play Just Another Day!</a>
                <br />
                <br />
                Technologies Used: HTML, CSS, JavaScript
                </p>
            </div>
        </div>
    )
}

export default JustAnotherDay