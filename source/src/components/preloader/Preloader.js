import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LogoIcon from '../logoIcon/LogoIcon.js';

import './preloader.scss';

function Preloader(){

    const [life, setLife] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{ setLife(false)}, 2500)
    }, []);

    return (
        <AnimatePresence>{
            life && (

                <motion.div exit={{opacity: 0}} transition={{duration: .5}} className='preloader'>
                    <LogoIcon parrent={'preloader'}/>
                </motion.div>
            )
        }</AnimatePresence>
    )
}

export default Preloader;