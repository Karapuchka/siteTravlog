import { motion } from 'framer-motion';

import imgLogo from '../../resources/images/logo.webp'
import './logo.scss';

function Logo(){
    return (
        <motion.a whileHover={{color: 'rgb(248, 94, 159)'}}  href='#' initial={{y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1, color: 'rgb(0, 0, 0)'}} transition={{duration: .7}} className="logo">
            <img src={imgLogo} className="logo__img"/>
            <p className="logo__title font-circularStd-black">Travlog</p>
        </motion.a>
    )
}

export default Logo;