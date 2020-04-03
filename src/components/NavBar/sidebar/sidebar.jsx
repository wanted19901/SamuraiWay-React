import f from './sidebar.module.css'
import React from "react";
import { NavLink } from "react-router-dom";
import Item from './item/item'

const Friends = (props) => {
  let profileElements = props.state.map(d => <Item name={d.name} secondName={d.secondName} id={d.id}/> );

    return (
    
    <div className={f.sidebar}>
            <NavLink to='/MyFriends' activeClassName={f.active}>    MyFriends </NavLink>    
             <div className={f.profilearea}>
               {profileElements}
                             
             </div>   
  </div>
    
    
    ) 
}
export default Friends;