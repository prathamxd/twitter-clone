import React from 'react'
import '../styles/Profile.css'
import coverImg from '../assets/cover.jpg'
import pfp from '../assets/pfp.jpg'

function Profile() {
    return (
        <div className='profile'>

            <div className='dsc-header'>
                <i class="fas fa-arrow-left"></i>
                <h1 className='dsc-jssaten'>DSC JSSATEN</h1>
                <p className='tweet-count'>207 tweets</p>
            </div>

            <img src={coverImg} alt='cover' className='cover'/>
            <img src={pfp} alt='pfp' className='pfp'/>

            <div className='connect'>
                <div className='more'><i className="fas fa-ellipsis-h m"></i></div>
                <div className='message'><i className="far fa-envelope m"></i></div>
                <div className='follow m'>Follow</div>
            </div>

            <div className='about'>
                <h1 className='profile-name'>DSC JSSATEN</h1>
                <p className='handle'>@DSCJSSATEN</p>
                <p className='bio'>DSC trains thousands of student developers globally and works with their communities to solve real-life problems. Community lead
                    <a href="https://twitter.com/pragati_verma18"> @pragati_verma18</a>
                </p>

                <div className='after-about'>
                    <div className='location'><i class="fas fa-map-marker-alt fa"></i><p className="j">Noida</p></div>
                    <div className='url'><i class="fas fa-link fa"></i><a href='https://www.dscjss.in/' className="j">dscjss.in</a></div>
                    <div className='joined'><i class="far fa-calendar fa"></i><p className="j">Joined July 2019</p></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
