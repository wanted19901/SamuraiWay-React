import React from "react";
import s from './navBar.module.css'
const NavBar = () => {
    return <nav className={s.nav}>
        <div className={s.Navigate}>
            <div className={s.item}>
                <a >    MyProfile </a>
            </div>
            <div className={s.item}>
                <a >    Massage </a>
            </div>
            <div className={s.item}>
                <a >    News </a>
            </div>
            <div  className={s.item}>
                <a >    Music </a>
            </div>
            <div className={s.item}>
                <a >    Setting </a>
            </div>
        </div>
    </nav>
}
export default NavBar;