 import React from "react";
import s from './Post.module.css'
import Likes from "./likes/Likes";


const Post = (props) => {
    return (
        <div className={s.itemContainer}>
        <img className={s.image} src='https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'/>
        <div className={s.item}>
            
            { props.message }
         
        </div>
        <Likes like_counter={props.like_counter}/>
        </div>

    )
}
export default Post;