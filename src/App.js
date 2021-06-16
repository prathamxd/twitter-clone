import React from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import Profile from './components/Profile'
import Tweets from './components/Tweets'
import CardSection from './components/CardSection'
import '../src/styles/App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Searchbar />
      <Profile />
      <Tweets />
      <CardSection />
      {/* <Grid /> */}
    </div>
  )
}

export default App
