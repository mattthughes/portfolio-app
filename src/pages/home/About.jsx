import React from 'react'
import "../../index.css";

const About = () => {
    return (
        <div id="about" className= "flex flex-col items-center gap-10 lg:gap-3">
            <h3 className="text-3xl font-bold">About Me</h3>
            <p className="text-lg text-center p-1">
                I am a Fullstack software developer with experience in creating modern web applications, such as Souls like Gallery and Last trophy, I enjoy building and creating applications which add value to users, 
                such as making an entitlement calculator which allows the user to easily calculate there remaining holiday.
            </p>
        </div>
    )
}

export default About