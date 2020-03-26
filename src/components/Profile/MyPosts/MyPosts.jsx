import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return <div className={s.MyPosts}>
        My posts
        <div>
            <textarea> </textarea>
            <button>Add post</button>
            New post
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