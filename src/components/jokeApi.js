import React, { useState } from 'react';
import axios from 'axios';

function JokeApi() {
    const [joke, setJokes] = useState(1);
    const apiUrl = "https://official-joke-api.appspot.com/random_joke";

    const fetchData = async () => {
        const response = await axios.get(apiUrl)
        
        setJokes(response.data)
    }

    return (
        <div>
            <button className="fetch-button" onClick={fetchData}>
                Click for a joke
            </button>

            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    );
}

export default JokeApi; 