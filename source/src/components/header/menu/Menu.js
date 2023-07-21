import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import SubMenu from './subMenu/SubMenu.js';

import './menu.scss';

let listItem = ['Главная', 'Времена года', 'Источники']

function Menu(){

    return (
        <nav className='header__nav'>
            <ul className='header__nav__list'>
                {listItem.map((item, index) => <MenuItem key={item} text={item} index={index}/>)}
            </ul>
        </nav>
    )
}

function MenuItem({text, index}){

    const [openSubMenu, setOpenSubMenu] = useState(false);

    const [animateLineItem, setAnimateLineItem] = useState({scale: 0, transformOrigin: 'left'})
     
    const showSubMenu = ()=>{
        if(index === 0){
            setOpenSubMenu(openSubMenu => !openSubMenu)
        }
    }

    const showLineItem = ()=>{

        if((index === 0 && !openSubMenu) || index != 0){
            setAnimateLineItem({scale: 1, transformOrigin: 'right'});
        }
    }

    const clouseLineItem = ()=> {
        if((index === 0 && !openSubMenu) || index != 0){
            setAnimateLineItem({scale: 0, transformOrigin: 'left'});
        }
    }

    let delay = index - .8 + 4;

    return (
        <motion.li onMouseOver={()=> showLineItem()} onMouseOut={()=> clouseLineItem()} onMouseDown={()=> showSubMenu()} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: delay}} className='header__nav__list__item'>
            <a className='header__nav__list__item__link'>
                {text}
                <motion.span animate={animateLineItem} transition={{duration: .7}} className='header__nav__list__item__line'></motion.span>
            </a>
            <SubMenu open={openSubMenu}/>
        </motion.li>
    )
}

MenuItem.propTypes = {
    text: PropTypes.string,
    index: PropTypes.number,
}

MenuItem.defaultProps = {
    text: 'Item menu',
    index: 1,
}

export default Menu;