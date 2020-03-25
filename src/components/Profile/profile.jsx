import React from "react";
import p from './profile.module.css'
import MyPosts from '../Profile/MyPosts/MyPosts'

const Profile = () => {
    return <div >
        <img className={p.img} src='https://photar.ru/wp-content/uploads/2019/08/0-4.jpg'/>
        <div className={p.Profile}>
            <img className={p.profilePhoto} src='https://bipbap.ru/wp-content/uploads/2017/10/3-6.png'/>
           
            <div className={p.ProfileInfo}>
                <div className={p.Name}> Aleksey G.</div>
                <div className={p.AboutMe}>
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