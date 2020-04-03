import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id;
    let newMessageElement = React.createRef();
             
       
    let addMessage = ()=>{
     let text = newMessageElement.current.value;
     alert(text)
    }

    return <div className={s.dialog}>
                < NavLink to={path} activeClassName={s.active}> {props.name}</NavLink>
       
           </div>
}


export default DialogItem;