import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {

    let postsData = [
        {id : 1, message : 'Hi, how are you?', likeCounter : 20},
        {id : 2, message : 'Lol, its work!', likeCounter : 2},
        {id : 3, message : 'Lalalalalla omg ', likeCounter : 77},
        {id : 4, message : 'Corona virus !!!11', likeCounter : 15},

    ]

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
            <Post message ={postsData[0].message} like_counter={postsData[0].likeCounter} />
            <Post message ={postsData[1].message} like_counter={postsData[1].likeCounter} />
            <Post message ={postsData[2].message} like_counter={postsData[2].likeCounter} />
            <Post message ={postsData[3].message} like_counter={postsData[3].likeCounter} />
            <Post/>
        </div>
    </div>
}
export default MyPosts;