import i from './item.module.css'
import React from "react";
import { NavLink } from "react-router-dom";


const Item = (props) => {
  let path = '/MyFriends/' + props.id;
    return (
      <div className={i.item}>
        <NavLink to={path} activeClassName={i.active}>     
          
              <img className={i.profilePhoto}  src='https://www.meme-arsenal.com/memes/cd2652ae9d5c44e3c695d72fd37f647e.jpg' />
              <div className={i.name}>  {props.name} {props.secondName} </div> 
          
        </NavLink>   
    </div>
    ) 
}
export default Item;