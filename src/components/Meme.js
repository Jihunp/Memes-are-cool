import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input className="form--input" placeholder="Top Text" type="text"/>
                <input className="form--input" placeholder="Bottom Text" type="text"/>
                <button className="form--btn">Click me for a new meme</button>
            </form>
        </main>
    )
}