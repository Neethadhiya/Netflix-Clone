import React from 'react'
import axios from 'axios'
import {action,originals} from './urls'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RawPost from './Components/RawPost/RawPost'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner/>
      <RawPost url={originals} title='Netflix Originals'/>
      <RawPost url={action} title='Action' isSmall/>

    </div>
  )
}

export default App


