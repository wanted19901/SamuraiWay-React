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
    
    let dialogsData =[
        {id : 1, name : 'Dima'}, 
        {id : 2, name : 'Andrey'}, 
        {id : 3, name : 'Ivan'}, 
        {id : 4, name : 'Petya'},
        {id : 5, name : 'Ira'}
     ]
     let messagesData =[
        {id : 1, message : 'Helloo bro '}, 
        {id : 2, message: 'Yoooooouuu'}, 
        {id : 3, message : 'WEgteeeeee'}, 
        {id : 4, message: 'hohYoooooouuu'},
        {id : 5, message: 'YoooooouuuYoooooouuuYoooooouuuYoooooouuu'}
     ]
     
     
    
return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
           
           <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
           <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
           <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
           <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        </div>
        <div className={s.messages}>
            <Message messageText={messagesData[0].message} />
            <Message messageText={messagesData[1].message}  />
            <Message messageText={messagesData[2].message} />
            <Message messageText={messagesData[3].message}  />
            
        </div>    
    </div>    
)
}
export default Dialogs;