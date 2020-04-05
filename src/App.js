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
import Friends from './components/NavBar/sidebar/sidebar'


const App = (props) => {

    

    return ( 
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar  state={props.state.profilePage}  />
           <div className='app-wrapper-content'>
               <Route path='/new' render={ () => <News   />}/>
               <Route path='/dialogs'
               render={ () => <Dialogs 
                        state={props.state.dialogPage} />}/>
               <Route path='/profile'
                render={ () => <Profile 
                        state={props.state.profilePage} addPost={props.addPost} />}/>
               <Route path='/music' render={ () => <Music  />}/>
               <Route path='/setting' render={ () => <Setting  />}/>
               <Route path='/MyFriends' render={ () => <Friends  state={props.state.profilePage} />}/>
               
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
