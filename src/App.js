import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dilogs/Dialogs"
import {Route, BrowserRouter} from "react-router-dom";



const App = () => {
    return ( 
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
           <div className='app-wrapper-content'>
               <Route path='/dialogs' component={Dialogs}/>
               <Route path='/profile' component={Profile}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
