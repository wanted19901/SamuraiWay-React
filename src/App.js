import React from 'react';
import './App.css';
import Header from "./components/header";
import NavBar from "./components/navBar";
import Profile from "./components/profile";


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
