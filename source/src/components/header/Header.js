import { motion } from 'framer-motion';

import Menu from './menu/Menu.js';
import LogoIcon from '../logoIcon/LogoIcon.js';

import './header.scss';

function Header(){

    return (<motion.header className='header'>

       <div className='container'>

            <LogoIcon parrent={''} />

            <Menu />

       </div>

    </motion.header>)
}

export default Header;