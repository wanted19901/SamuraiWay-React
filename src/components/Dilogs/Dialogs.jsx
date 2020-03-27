import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = '/Dialogs/' + props.id;

    return <div className={s.dialog}>
        < NavLink to={path} activeClassName={s.active}> {props.name}</NavLink>
    </div>
}

const Message = (props) => {

    return <div className={s.message}> {props.messageText} </div>

}



const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Ivan' },
        { id: 4, name: 'Petya' },
        { id: 5, name: 'Ira' }
    ]

    let messages = [
        { id: 1, message: 'Helloo bro ' },
        { id: 2, message: 'Yoooooouuu' },
        { id: 3, message: 'WEgteeeeee' },
        { id: 4, message: 'hohYoooooouuu' },
        { id: 5, message: 'YoooooouuuYoooooouuuYoooooouuuYoooooouuu' }
    ];

    let dialogsElements = dialogs.map(d =><DialogItem name={d.name} id={d.id} /> );
   

    let messageElements = messages.map(m =><Message messageText={m.message} id={m.id} />);

    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
export default Dialogs;