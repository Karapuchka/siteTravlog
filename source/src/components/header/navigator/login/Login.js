import { useContext } from 'react';
import {motion} from 'framer-motion';

import { ModalContext } from '../../../../resources/scripts/ModalContext.js';
import detect from '../../../../resources/scripts/detect.js'

import './login.scss';

function Login() {

    const [openModal, setOpenModal] = useContext(ModalContext);

    const onOpenModal = ()=>{
        if(!openModal){

            setOpenModal(openModal => !openModal);

            setTimeout(()=>{
                setOpenModal(openModal => !openModal);
            }, 1500);
        }
    }

    const onClickBtn = (e)=>{
        e.preventDefault();
    }

    if(detect){
        return (
            <form method="GET" name="login" className='login' onSubmit={onClickBtn}>
    
                <motion.button onClick={()=> onOpenModal()}
                               initial={{y: -10, opacity: 0}} 
                               animate={{y: 0, opacity: 1, background: 'rgb(255, 255, 255)'}} 
                               transition={{duration: .7}} 
                               onTapStart={{background: 'rgb(93, 80, 198)', color: 'rgb(255, 255, 255)'}} 
                               onTapEnd={{background: 'rgb(255, 255, 255)', color: 'rgb(255, 255, 255)'}} 
                               className='login__btn font-circularStd-Bold' 
                               type='submit' 
                               name='login-btn-entrance'>Log in</motion.button>
    
                <motion.button onClick={()=> onOpenModal()} 
                               initial={{y: -10, opacity: 0}} 
                               animate={{y: 0, opacity: 1, background: 'rgb(93, 80, 198)'}} 
                               transition={{duration: .7}} 
                               onTapStart={{background: 'rgb(248, 94, 159)'}} 
                               onTapEnd={{background: 'rgb(93, 80, 198)'}} 
                               className='login__btn login__btn--singup font-circularStd-Bold' 
                               type='submit' 
                               name='login-btn-singup'>Sing up</motion.button>
            </form>
        )
    }

    return (
        <form method="GET" name="login" className='login' onSubmit={onClickBtn}>

            <motion.button onClick={()=> onOpenModal()}
                           initial={{y: -10, opacity: 0}} 
                           animate={{y: 0, opacity: 1, background: 'rgb(255, 255, 255)'}} 
                           transition={{duration: .7}} 
                           whileHover={{background: 'rgb(248, 94, 159)', color: 'rgb(255, 255, 255)'}} 
                           className='login__btn font-circularStd-Bold' 
                           type='submit' 
                           name='login-btn-entrance'>Log in</motion.button>

            <motion.button onClick={()=> onOpenModal()} 
                           initial={{y: -10, opacity: 0}} 
                           animate={{y: 0, opacity: 1, background: 'rgb(93, 80, 198)'}} 
                           transition={{duration: .7}} 
                           whileHover={{background: 'rgb(248, 94, 159)'}} 
                           className='login__btn login__btn--singup font-circularStd-Bold' 
                           type='submit' 
                           name='login-btn-singup'>Sing up</motion.button>
        </form>
    )
}

export default Login;