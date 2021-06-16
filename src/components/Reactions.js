import React from 'react'
import '../styles/Reactions.css'

function Reactions() {
    return (
        <div className="reactions">
            <div className="rxn-icon"><i class="far fa-comment a"></i></div>
            <div className="rxn-icon"><i class="fas fa-retweet g"></i></div>
            <div className="rxn-icon"><i class="far fa-heart h"></i></div>
            <div className="rxn-icon"><i class="fas fa-share a"></i></div>
        </div>
    )
}

export default Reactions
