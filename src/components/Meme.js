import React from "react"
import memesData from "../memesData"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
    const [meme, setMeme] = React.useState({
        TopText: '',
        BottomText: '',
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    } 



    return (
        <main> 
            <div className="form">
                <input 
                className="form--input" 
                placeholder="Top Text" 
                type="text"/>
                <input 
                className="form--input" 
                placeholder="Bottom Text" 
                type="text"/>
                <button 
                className="form--btn"
                onClick={getMemeImage}
                >Click me for a new meme</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="random meme"/>
        </main>
    )
}