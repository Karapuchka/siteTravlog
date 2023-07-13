import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Search from './search/Search.js';
import Menu from './menu/Menu.js';
import LogoIcon from '../logoIcon/LogoIcon.js';

import './header.scss';

function Header(){

    return (<motion.header className='header'>

       <div className='container'>

            <LogoIcon parrent={''} />

            <Menu />

            <Search />

       </div>

    </motion.header>)
}

export default Header;