import { useContext, useState, useEffect } from 'react';
import {motion} from 'framer-motion';

import { ModalContext } from '../../../../resources/scripts/ModalContext.js';
import detect from '../../../../resources/scripts/detect.js'
import './menu.scss';

const listItem = ['Home', 'Discover', 'Special Deals', 'Contact'];

function Menu(){

    return (
        <nav className='menu'>

            <ul className='menu__list'>
                {listItem.map((item, index) => <ItemMenu key={index + 'itemMenu'} text={item} count={+index + 1} />)}
            </ul>

        </nav>
    )
}

function ItemMenu({text, count}){

    const [modalOpen, setModalOpen] = useContext(ModalContext);
    const [transition, setTransition] = useState({duration: .7, delay: `.${count}`})

    const onClickToLink = ()=>{
        
        if(!modalOpen){

            setModalOpen(modalOpen => !modalOpen);

            setTimeout(()=>{
                setModalOpen(modalOpen => !modalOpen);
            }, 1500);
        }
    }

    useEffect(()=>{

        setTimeout(()=>{
            setTransition({duration: .7, delay: 0})
        }, 500);

    }, [])

    if(detect){
        return(
            <motion.li initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={transition} onClick={()=> onClickToLink()} className='menu__list__item font-circularStd-Bold'>{text}</motion.li>
        )
    }

    return(
        <motion.li initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} transition={transition} onClick={()=> onClickToLink()} whileHover={{color: 'rgb(248, 94, 159)'}} className='menu__list__item font-circularStd-Bold'>{text}</motion.li>
    )
}

export default Menu;