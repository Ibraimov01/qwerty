import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const  App = () =>  {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
<Header/>
<Navbar/>
<div class='app-wrapper-content'>

<Routes>
<Route exact path="/profile" element={<Profile/>}/>
<Route path="/dialogs" element={<Dialogs/>}/>
<Route path="/dialogs" element={<Dialogs/>}/>
</Routes>
</div>
</div>
</BrowserRouter>);
}



export default App;
