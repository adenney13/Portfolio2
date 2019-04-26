import React from 'react'

const About = () => {
    return (
        <div>
           
            <div className = 'about-me'>
            <h2>About Me</h2>
                <div className ='about-me-body'>
                    <div className='pbrandstatement'>
                        As a passionate, formally trained musician and bar manager, I not only have a love for learning the inner-workings of all things, but I’m fiercely loyal in not quitting until a job is completed. As a strong bar manager, I developed interpersonal, customer service, and group critical thinking skills that would make me not only an effective part of any team, but a great person to work with and for. Whether writing a song, crafting a cocktail, or coding, I relish figuring out the perfect formula and tweaking the details to make something new and fresh, not just for myself but for others to experience as well.
                    </div>
                    <div className = 'tools'>
                        <h2>Tools I Use:</h2>
                        <ul className = 'tools-list'>
                            <div className = 'list-split'>
                                <div className = 'left-list'>
                                <li>React</li>
                                <li>Ruby on Rails</li>
                                <li>JavaScript</li>
                                </div>
                                <div className = 'right-list'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Express</li>
                                <li>SQL</li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About