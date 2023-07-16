import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import './menu.scss';

let listItem = ['Блог', 'Портфолио', 'Об авторе']

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
    
    let delay = index - .8 + 4;

    return (
        <motion.li initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: delay}} className='header__nav__list__item'>
            <a className='header__nav__list__item__link'>
                {text}
                <span className='header__nav__list__item__line'></span>
            </a>
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