import React from "react";
import s from './navBar.module.css'
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.Navigate}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>    MyProfile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs' activeClassName={s.active}>    Massage </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/New' activeClassName={s.active}>    News </NavLink>
            </div>
            <div  className={s.item}>
                <NavLink to='/Music'activeClassName={s.active}>    Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Setting'activeClassName={s.active}>    Setting </NavLink>
            </div>
        </div>
    </nav>
}
export default NavBar;