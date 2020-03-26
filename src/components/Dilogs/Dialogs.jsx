import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogs = (props) =>{
return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog}> 
           < NavLink to='/Dialogs/1' activeClassName={s.active}> Dima</NavLink>
            </div>
            <div className={s.dialog}>
            < NavLink to='/Dialogs/2' activeClassName={s.active}>  Petya </NavLink>
            </div>
            <div className={s.dialog}>
            < NavLink to='/Dialogs/3' activeClassName={s.active}> Valera </NavLink>
            </div>
            <div className={s.dialog}>
            < NavLink to='/Dialogs/4' activeClassName={s.active}> Viktor </NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}> Hi</div>
            <div className={s.message}> yoooooooooo</div>
            <div className={s.message}> Hello !!11</div>
        </div>    
    </div>    
)
}
export default Dialogs;