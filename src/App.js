import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/profile";



const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}


export default App;
