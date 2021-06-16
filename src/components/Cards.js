/* eslint-disable no-unused-vars */
import React from 'react'
import Follow from './Follow'
import butterdog from '../assets/butterdog.jpg'
import ham from '../assets/hammie.png'
import kanye from '../assets/kanye.png'
import '../styles/Cards.css'

function Like() {
    return (
        <div className='like'>

            <h2 className="like-title t">You might like</h2>

            <div className='like-item'>
                <img src={butterdog} alt='butter-dog' className='like-pfp dog'></img>
                <h3 className='like-user'>Butter dog</h3>
                <p className='like-tag'>@butter_dog</p>
                
                <Follow />
            </div>

            <div className='like-item'>
                <img src={ham} alt='hampter' className='like-pfp hammie'></img>
                <h3 className='like-user'>Hammie</h3>
                <p className='like-tag'>@hampter</p>
                <Follow />
            </div>

            <div className='like-item'>
                <img src={kanye} alt='kanye' className='like-pfp kanye'></img>
                <h3 className='like-user'>Kanye West</h3>
                <p className='like-tag'>@happykanye</p>
                <Follow />
            </div>
            <a href="https://twitter.com/DSCJSSATEN/" className="like-showmore">Show more</a>
        </div>
    )
}

function Happen() {
    return (
        <div className='happen'>

            <h2 className='happen-title t'>What's Happening</h2>

            <div className='happen-item'>
                <p className="happen-t">COVID-19·LIVE</p>
                <h4 className="happen-h">COVID-19 vaccination for 18-45 age group is now open</h4>
            </div>

            <div className='happen-item'>
                <p className="happen-t">COVID-19·LIVE</p>
                <h4 className="happen-h">Here are the latest updates on COVID-19 from news organisations in India</h4>
            </div>

            <div className='happen-item'>
                <p className="happen-t">Trending in India</p>
                <h4 className="happen-h">#JanhviKapoor</h4>
                <p className="happen-t tw">2,031 Tweets</p>
            </div>
            <a href="https://twitter.com/DSCJSSATEN/" className="happen-showmore">Show more</a>
        </div>
    )
}

function Topics() {
    return (
        <div className='topics'>
            
            <h2 className='topics-title t'>Topics to follow</h2>

            <div className='topics-item'>
                <h4 className="topics-h">Web development</h4>
                <p className="topics-t">Technology</p>
                <Follow />
            </div>

            <div className='topics-item'>
                <h4 className="topics-h">Sports</h4>
                <p className="topics-t">All about Sports</p> 
                <Follow />
            </div>

            <div className='topics-item'>
                <h4 className="topics-h">Mariya Takeuchi</h4>
                <p className="topics-t">Japanese singer</p>
                <Follow />
            </div>

            <div className='topics-item'>
                <h4 className="topics-h">Nintendo</h4>
                <p className="topics-t">Gaming</p>
                <Follow />
            </div>

            <div className='topics-item'>
                <h4 className="topics-h">Tessa Violet</h4>
                <p className="topics-t">Music</p>
                <Follow />
            </div>
            <a href="https://twitter.com/DSCJSSATEN/" className="topics-showmore">Show more</a>
        </div>
    )
}

export  {Like, Happen, Topics}
