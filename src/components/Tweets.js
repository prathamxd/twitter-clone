import React from 'react'
import Tweet from './Tweet'
import '../styles/Tweets.css'
import image6 from '../assets/image6.jpg'
import image5 from '../assets/image5.jpg'
import image0 from '../assets/image0.jpg'
import image7 from '../assets/image7.jpg'
import discord from '../assets/discord.jpg'

function Tweets() {
    return (
        <div className='tweets'>
            <Tweet 
                date="Jun 7"
                img={image6}
                chunk1='As '
                chunk2="@girlscriptsoc2021"
                chunk2fr="https://twitter.com/girlscriptsoc"    
                chunk3=" is over, we would like to extend a huge thanks to all the mentors, participants, and the whole "
                chunk4='@Girlscript1'
                chunk4fr="https://twitter.com/Girlscript1"
                chunk5=' team for such an amazing experience of sheer collaboration and learning! '
                chunk6=' We had a great contribution graph this season for both of our projects.'
            />
            <Tweet 
                date="Jun 6"
                img={image5}
                chunk1='Had an awesome interactive session on Design with'
                chunk2='@krrohitch'
                chunk2fr="https://twitter.com/krrohitch"
                chunk3=' and '
                chunk4='@prototyper23'
                chunk4fr="https://twitter.com/prototyper23"
                chunk6="Thanks for the amazing discussion and we'll be back with more such sessions soon"
            />
            <Tweet 
                date="Jun 4"
                img={image7}
                chunk1='"Design is not just what it looks like and feels like. Design is how it works." '
                chunk6="It's time to explore the various fields of design and the future that awaits. Join us and ask anything related to design and how to ace your journey to be a great designer."
            />
            <Tweet 
                date="Jun 4"
                img={discord}
                chunk1="Join DSC JSSATEN discord channel at"
            />
            <Tweet 
                date="Dec 26, 2020"
                img={image0}
                chunk1="The next session of Android Study Jams is coming your way! Learn how to build multi screen apps for Android using Kotlin, earn skill badges and get a chance to become a Google Certified Android Developer."
                chunk6="RSVP now at:"
                chunk4="  bit.ly/jss-studyjams2"
                chunk4fr="https://dsc.community.dev/events/details/developer-student-clubs-jss-academy-of-technical-education-noida-presents-android-study-jam-hands-on-session-1/"
            />
        </div>
    )
}

export default Tweets
