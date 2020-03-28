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


const App = (props) => {

    
    
    
    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Ira' }
    ]

    let messages = [
        { id: 1, message: 'Helloo bro ' },
        { id: 2, message: 'Yoooooouuu' },
        { id: 3, message: 'WEgteeeeee' },
        { id: 4, message: 'hohYoooooouuu' },
        { id: 5, message: 'YoooooouuuYoooooouuuYoooooouuuYoooooouuu' }
    ];



    return ( 
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
           <div className='app-wrapper-content'>
               <Route path='/new' render={ () => <News  />}/>
               <Route path='/dialogs'render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
               <Route path='/profile' render={ () => <Profile posts={props.posts} />}/>
               <Route path='/music' render={ () => <Music  />}/>
               <Route path='/setting' render={ () => <Setting  />}/>
            </div>
        </div>
        </BrowserRouter>
    );
}


export default App;
