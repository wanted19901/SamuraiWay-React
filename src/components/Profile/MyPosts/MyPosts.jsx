import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return <div className={s.MyPosts}>
        My posts
        <div className={s.addPost}>
            <div>
            <textarea className={s.textInput}> </textarea>
            </div>
            <div>
            <button className={s.button}>Add post</button>
            </div>
           <h3> Last posts</h3>
        </div>
        <div className={s.posts}>
            <Post message ='Hi, how are you?' like_counter='20' />
            <Post message ='My first post' like_counter='13' />
            <Post message='Wow, it work' like_counter='77'/>
            <Post/>
        </div>
    </div>
}
export default MyPosts;