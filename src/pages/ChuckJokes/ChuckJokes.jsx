import {useState} from 'react';
import React from 'react';
import axios from 'axios';

export default function ChuckJokes() {
    const [joke, setJoke] = useState('')

    const getJoke = () => {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then((res) => {
                console.log(res)
                setJoke(res.data.value)
            })
    }

    return (
    <>
        <div className="joke-container">
            <br />
            <button className="joke-button" onClick={getJoke}>Chuck Says Click Here</button>
            <br /><br />
            <div className="joke">
                {joke}
            </div>
        </div>
    </>
    )
}