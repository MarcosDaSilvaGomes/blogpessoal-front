import React, { useState } from "react";
import './Home.css';

function Home () {
    const [num, setNum] = useState (0);
    const [int, setInt] = useState (0)

    return (
        <>
        <h1> Você apertou {num} vezes </h1>
        <h2> {int} pessoas  </h2>

        <button color="secundary" onClick={() => setNum(num + 1)}> 
        Aperte aqui 
        </button>
        <br />

        <button onClick={() => setInt(int + 1)}> 
         + Pessoas
        </button>
        <br />

        <button onClick={() => setInt(int - 1)}> 
        - Pessoas
        </button>
        </>
    )
}

export { Home }