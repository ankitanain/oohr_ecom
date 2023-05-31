import React from 'react'
import Typewriter from "typewriter-effect";

const Typing = () => {
    return (
        <div className='container' style={{ fontSize: "xx-large", fontWeight: "700", color: "#eb9047" }}>
            <center><Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome To OOhr innovations ")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("One stop services")
                        .start();
                }}
            /></center>
        </div>
    )
}

export default Typing
