import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Article from './article/Article';

import './main.scss';

function Main({page}){

    switch (page) {

        case 'winter':
            return (
                <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 4.3}} className='main'>
                    <div className='container main__container'>
                        <Article seasons={page}/>
                    </div>
                </motion.main>
            )

        case 'summer':
            return (
                <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 4.3}} className='main'>
                    <div className='container main__container'>
                    <Article seasons={page}/>
    
                    </div>
                </motion.main>
            )

        case 'spring':
            return (
                <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 4.3}} className='main'>
                    <div className='container main__container'>
        
                    </div>
                </motion.main>
            )

        case 'autumn':
            return (
                <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 4.3}} className='main'>
                    <div className='container main__container'>
        
                    </div>
                </motion.main>
            )

        case 'home':
            return (
                <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 4.3}} className='main'>
                    <div className='container main__container'>
        
                    </div>
                </motion.main>
            )

        case 'source':
            return (
                <motion.main initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: .7, delay: 4.3}} className='main'>
                    <div className='container main__container'>
        
                    </div>
                </motion.main>
            )
    }
}

Main.propTypes = {
    page: PropTypes.string,
}

Main.defaultProps = {
    page: 'home',
}

export default Main;