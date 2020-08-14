import React from 'react'
import "../App.css"

export default function Search({value, filter}) {
    return (
        <div>
            <input placeholder="Search" onKeyUp={filter} onChange={value}/>
        </div>
    )
}
