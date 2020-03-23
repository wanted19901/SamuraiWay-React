import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRey9X_lVOBr1fSb_uayt-imi2S2fpC2qQm3YpnKMAZshH33OPM'/>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Masage
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Setting
                </div>
            </nav>
            <div className='content'>
                Main content
                <img src='https://photar.ru/wp-content/uploads/2019/08/0-4.jpg'/>
                <div className='Profile'>
                    <div className='profilePhoto'><img src='https://bipbap.ru/wp-content/uploads/2017/10/3-6.png'/>
                    </div>
                    <div className='ProfileInfo'>
                        <div className='Name'> Aleksey G.</div>
                        <div className='AboutMe'>
                            <ul>
                                <li>Date of birthday:</li>
                                <li> City:</li>
                                <li> Aducation:</li>
                                <li> Web-site:</li>
                            </ul>

                        </div>


                    </div>
                </div>
                <div className='MyPost'> My post
                    <div className='NewPost'> New post</div>
                </div>
            </div>
        </div>
    );
}


export default App;
