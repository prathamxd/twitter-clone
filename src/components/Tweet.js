/* eslint-disable no-unused-vars */
import React from 'react'
import pfp from '../assets/pfp.jpg'
import Reactions from './Reactions'

import '../styles/Tweet.css'

function Tweet(props) {
    return (
        <div className='tweet-s'>

            <div className='details'>
                <img src={pfp} alt='pfp' className='pfp-tweet details-item'/>
                <h4 className='header-s details-item'>DSC JSSATEN</h4>
                <p className="tag-s details-item">@DSCJSSATEN . </p>
                <p className="date details-item">{props.date}</p>
            </div>

            <div className='actual-tweet'>
                <p className="actual-tweet-content">{props.chunk1} <a href={props.chunk2fr}>{props.chunk2}</a>{props.chunk3}<a href={props.chunk4fr}>{props.chunk4}</a>{props.chunk5}<br /> <br />{props.chunk6}</p>
                <img src={props.img} alt="tweet-img" className="actual-tweet-image"/>
            </div>

            <Reactions/>

        </div>
    )
}

export default Tweet
