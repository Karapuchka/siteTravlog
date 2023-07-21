import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import './subMenu.scss';

let arrayItem = ['Весна', 'Осень', 'Зима', 'Лето'];

function SubMenu({open}){

    return (
        <AnimatePresence>
            {open && (
                    <motion.ul exit={{opacity: 0}} transition={{duration: .4}} style={{alignItems: 'flex-start'}} className='header__nav__list sub-menu'>
                        {arrayItem.map((item, index) => <SubMenuItem text={item} index={index} />)}
                    </motion.ul>
                )}
        </AnimatePresence>
    )
}

function SubMenuItem({text, index}){

    const [animateLineItem, setAnimateLineItem] = useState({scale: 0, transformOrigin: 'left'})
    
    let delay = 0;

    switch (index) {
        case 0:
            delay = .4;
            break;
        case 1: 
            delay = .6;
            break;
        case 2: 
            delay = .8;
            break;
        case 3:
            delay = 1;
            break;
    }

    const showLineItem = ()=>{
        setAnimateLineItem({scale: 1, transformOrigin: 'right'});
    }

    const clouseLineItem = ()=> {
        setAnimateLineItem({scale: 0, transformOrigin: 'left'});
    }

    return (
        <motion.li onMouseOver={()=> showLineItem()} onMouseOut={()=> clouseLineItem()} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: .7, delay: delay}} className='header__nav__list__item sub-menu__item'>
            <a className='header__nav__list__item__link'>
                {text}
                <motion.span animate={animateLineItem} transition={{duration: .7}} className='header__nav__list__item__line'></motion.span>
            </a>
        </motion.li>
    )
}

SubMenu.propTypes = {
    open: PropTypes.bool,
}

SubMenu.defaultProps = {
    open: false,
}

SubMenuItem.propTypes = {
    text: PropTypes.string,
    index: PropTypes.number,
}

SubMenuItem.defaultProps = {
    text: 'Item menu',
    index: 0,
}

export default SubMenu;