 import React from "react";
import s from './Likes.module.css'


const Likes = (props) => {
    return (

            <div>
                <span className={s.Likes}> {props.like_counter} Like</span>
            </div>



    )
}
export default Likes;