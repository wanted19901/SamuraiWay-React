import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogsItem'




const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d =><DialogItem name={d.name} id={d.id} /> );
    let messageElements = props.state.messages.map(m =><Message messageText={m.message} id={m.id} />);
    
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