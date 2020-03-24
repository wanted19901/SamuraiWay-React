import React from "react";
import p from './profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'

const Profile = () => {
    return <div className={p.content}>
        <img src='https://photar.ru/wp-content/uploads/2019/08/0-4.jpg'/>
        <div className={p.Profile}>
            <div className={p.profilePhoto}><img src='https://bipbap.ru/wp-content/uploads/2017/10/3-6.png'/>
            </div>
            <div className={p.ProfileInfo}>
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
       <MyPosts/>

    </div>
}
export default Profile;