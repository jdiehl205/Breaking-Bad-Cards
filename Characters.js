import React, {useEffect, useState} from 'react'
import '../App.css'

export default function Characters({characters,styles, loading}) {
    let load = "Loading..."
    if(loading === true){
        return(
            <>
                <h1>{load}</h1>
            </>
        )
    }else{
        return (
            <>
            <div className="container">
                {characters.map(char => {
                    return (
                    <div key={char.char_id} className="card-container">
                        <div className="card-flip">
                            <div className="front-card">
                                <img className="card" style={styles} src={char.img} alt={char.name} key={char.char_id}></img>
                            </div>
                            <div className="back-card">
                                <h4>{char.name}</h4>
                                <h4>Occupation</h4>
                                {char.occupation.map(job => {
                                    return <h5 key={job}>{job}</h5>
                                })}
                                <h4>Status</h4>
                                <h5>{char.status}</h5>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            </>
        )
    }
}
