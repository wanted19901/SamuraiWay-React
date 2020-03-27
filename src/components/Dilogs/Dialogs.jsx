import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id ;

    return    <div className={s.dialog}> 
    < NavLink to={path} activeClassName={s.active}> {props.name}</NavLink>
     </div>
}

const Message = (props) =>{

return <div className={s.message}> {props.messageText} </div>

}



const Dialogs = (props) =>{
return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           
           <DialogItem name='Dima' id='1'/>
           <DialogItem name='Ivan' id='2'/>
           <DialogItem name='Petya' id='3'/>
           <DialogItem name='Ira' id='4'/>
        </div>
        <div className={s.messages}>
            <Message messageText='Helloo bro ' />
            <Message messageText='Yoooooouuu' />
            <Message messageText='WEgteeeeee' />
            <Message messageText='hoh oh oh oh ho' />
            
        </div>    
    </div>    
)
}
export default Dialogs;