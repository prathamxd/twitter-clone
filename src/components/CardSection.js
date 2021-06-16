/* eslint-disable no-unused-vars */
import React from 'react'
import {Like, Happen, Topics} from './Cards'
import '../styles/Cards.css'

function CardSection() {
    return (
        <div className='card-section'>
            <Like className='class-section-item' />
            <Happen className='class-section-item' />
            <Topics className='class-section-item' />
        </div>
    )
}

export default CardSection
