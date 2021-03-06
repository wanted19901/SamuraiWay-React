import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

       let postsElements = props.posts.map( p=>  <Post message ={p.message} like_counter={p.likeCounter} />  );
       let newPostElement = React.createRef();
             
       
       let addPost = () =>{
          
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value="";
       }

    return <div className={s.MyPosts}>
        My posts
        <div className={s.addPost}>
            <div>
            <textarea className={s.textInput} ref = {newPostElement} ></textarea>
            </div>
            <div>
            <button className={s.button} onClick={addPost}>Add post</button>
            </div>
           <h3> Last posts</h3>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;