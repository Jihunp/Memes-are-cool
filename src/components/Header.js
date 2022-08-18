import React from "react";

export default function Header() {
    return(
        <header className="header">
            <h1 className="header-title">MEME Generate</h1>
            <img src="./images/frog.jpg" className="header--image" alt="frog with his head out the water"/>
            <h4 className="header--project"> React Project</h4>
        </header>
    )
}
