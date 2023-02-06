import React from 'react';

import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Music from './components/Misuc/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';




const App=()=>{
  return(
    <div className='app-wrapper'>
  <Header/>
  <Navbar/>
  <div className='app-wrapper-content'>
  {/* <Profile/> */}
  {/* <News/> */}
  <Dialogs/>
  {/* <Music/> */}
  </div>
  <Footer/>
  
    </div>
  );
}



export default App;
