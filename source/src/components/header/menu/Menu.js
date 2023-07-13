import { useState, useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import PropTypes from 'prop-types';

import './menu.scss';

let listItem = ['Блог', 'Портфолио', 'Об авторе']

function Menu(){

    const [scope, animate] = useAnimate();

    useEffect(()=>{

        animate('li', {}, {delay: stagger(4.1)})
        
    }, [])
    return (
        <nav className='header__nav'>
            <ul ref={scope} className='header__nav__list'>
                {listItem.map(item => <MenuItem key={item} text={item} />)}
            </ul>
        </nav>
    )
}

function MenuItem({text}){

    return (
        <motion.li initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: .7}} className='header__nav__list__item'>
            <a className='header__nav__list__item__link'>
                {text}
                <span className='header__nav__list__item__line'></span>
            </a>
        </motion.li>
    )
}

export default Menu;