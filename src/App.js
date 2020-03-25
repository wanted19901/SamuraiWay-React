import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import NavBar from "./components/NavBar/navBar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dilogs/Dialogs"
import {Route, BrowserRouter} from "react-router-dom";
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Setting from "./components/Setting/Setting"


const App = () => {
    return ( 
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
           <div className='app-wrapper-content'>
               <Route path='/new' component={News}/>
               <Route path='/dialogs' component={Dialogs}/>
               <Route path='/profile' component={Profile}/>
               <Route path='/music' component={Music}/>
               <Route path='/setting' component={Setting}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
