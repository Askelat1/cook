import React from 'react';
import module from './Header.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';

function Header(props) {
    return (
        <header>
            <nav>
                <img className={module.nav_item} src={logo}></img>
                <div className={module.navCategory}>
                    <div className={module.nav_cat}>категория</div>
                    <div><img className={module.nav_img} src={vector}></img></div>
            </div>
            <a className={module.nav_item} href='#'>О нас</a>
                <div className={module.nav_itemStart}>
                    <div className={module.itemStart}>Начать</div>
                </div>
            </nav>
        </header>
    );
}

export default Header;