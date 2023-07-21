import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PropType from 'prop-types';

import './logoIcon.scss';

function LogoIcon({parrent}){

    const [life, setLife] = useState(true);

    const [animaTree, setAnimateTree] = useState({left: {opacity: [0, 0, 0, 1, 1], x: -30}, right: {opacity: [0, 0, 0, 1, 1], x: 30}, transition: {duration: 1, delay: 4, times:[0, .25, .50, .75, 1]}})

    const onShowTree = ()=>{
        setAnimateTree({
            left: {
                rotate: [0, 10, -10, 0, 0],
                opacity: [1, 1, 1, 1, 1],
                x: [-30, -30, -30, -30, -30],
            },

            right: {
                rotate: [0, 0, -10, 10, 0],
                opacity: [1, 1, 1, 1, 1],
                x: [30, 30, 30, 30, 30],
            },

            transition: {
                duration: .7, 
                delay: 0,
                times: 0,
            }
        });

        setTimeout(()=>{
            setAnimateTree({
                left: {
                    rotate: [0],
                    opacity: [1, 1, 1, 1, 1],
                    x: [-30, -30, -30, -30, -30],
                },
    
                right: {
                    rotate: [0],
                    opacity: [1, 1, 1, 1, 1],
                    x: [30, 30, 30, 30, 30],
                },
    
                transition: {
                    duration: .7, 
                    delay: 0,
                    times: 0,
                }
            });
        }, 700)
    }

    if(parrent === 'preloader'){
        return (

            <AnimatePresence>{
                life && (
                    <div className={`logo-icon logo-icon--preloader`}>
    
                        <div className='logo-icon__tree'>
                            <motion.span initial={{opacity: 0}} animate={{opacity: 1, x: -30}} exit={{opacity: 0, x: 0}} transition={{duration: 1, delay: .4}} className='logo-icon__tree__left'></motion.span>
                            <motion.span initial={{opacity: 0}} animate={{opacity: 1, x: 30}} exit={{opacity: 0, x: 0}} transition={{duration: 1, delay: .4}} className='logo-icon__tree__right'></motion.span>
            
                        </div>
            
                        <motion.p initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: .8}} className='logo-icon__label'>Времена года</motion.p>
               
                </div>
            )}</AnimatePresence>
        )
    } else {
        return (

            <motion.div className={`logo-icon`} onClick={()=> onShowTree()}>
    
                <div className='logo-icon__tree'>
                    <motion.span animate={animaTree.left}  transition={animaTree.transition} className='logo-icon__tree__left'></motion.span>
                    <motion.span animate={animaTree.right} transition={animaTree.transition} className='logo-icon__tree__right'></motion.span>

                </div>

                <motion.p initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 4}} className='logo-icon__label'>Времена года</motion.p>
    
            </motion.div>
        )
    }


}

LogoIcon.propTypes  = {
    parrent: PropType.string,
}

LogoIcon.defaultProps = {
    parrent: '',
}

export default LogoIcon;