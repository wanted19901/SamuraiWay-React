import React from "react";


const Profile = () => {
  return  <div className='content'>
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
}
export default Profile;