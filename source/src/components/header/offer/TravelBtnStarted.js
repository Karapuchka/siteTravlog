import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import iconPlay from '../../../resources/images/travel-started-icon-play.svg';
import detect from '../../../resources/scripts/detect.js';

import './offerHeader.scss';

function TravelBtnStarted({id}){

    if(detect){
        if(id == 'bnt-get-started'){
            return (
                <motion.button initial={{y: -10, opacity: 0}} 
                               animate={{y: 0, opacity: 1, background: '#5D50C6'}} 
                               transition={{duration: .7}} 
                               onTapStart={{background: '#5D50C6'}} 
                               onTapEnd={{background: '#f85e9f'}}
                               className='travel-started__btn' 
                               id={id} 
                               name="travel-started-btn-start" 
                               type="sybmit">
                    <div className="travel-started__btn__content font-circularStd-Bold">Get Started</div>
                </motion.button>
            )
        } else {
            return (
                <motion.button initial={{y: -10, opacity: 0}} 
                               animate={{y: 0, opacity: 1, background: 'rgb(255, 255, 255)'}} 
                               transition={{duration: .7}} 
                               onTapStart={{background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)'}}
                               onTapEnd={{background: 'rgb(248, 94, 159)', color: 'rgb(255, 255, 255)'}} 
                               className='travel-started__btn travel-started__btn--bg-transparent' 
                               id={id} 
                               name="travel-started-btn-demo" 
                               type="sybmit">
                    <div className="travel-started__btn__content">
                        <img className="travel-started__btn__content__img" src={iconPlay}/>
                        <span className="font-circularStd-Bold">Watch Demo</span>
                    </div>
                </motion.button>
            )
        }
    } else {
        if(id == 'bnt-get-started'){
            return (
                <motion.button initial={{y: -10, opacity: 0}} 
                               animate={{y: 0, opacity: 1, background: '#5D50C6'}} 
                               transition={{duration: .7}} 
                               whileHover={{background: '#f85e9f'}} 
                               className='travel-started__btn' 
                               id={id} 
                               name="travel-started-btn-start" 
                               type="sybmit">
                    <div className="travel-started__btn__content font-circularStd-Bold">Get Started</div>
                </motion.button>
            )
        } else {
            return (
                <motion.button initial={{y: -10, opacity: 0}} 
                               animate={{y: 0, opacity: 1, background: 'rgb(255, 255, 255)'}} 
                               transition={{duration: .7}} 
                               whileHover={{background: 'rgb(248, 94, 159)', color: 'rgb(255, 255, 255)'}} 
                               className='travel-started__btn travel-started__btn--bg-transparent' 
                               id={id} 
                               name="travel-started-btn-demo" 
                               type="sybmit">
                    <div className="travel-started__btn__content">
                        <img className="travel-started__btn__content__img" src={iconPlay}/>
                        <span className="font-circularStd-Bold">Watch Demo</span>
                    </div>
                </motion.button>
            )
        }
    }
}

TravelBtnStarted.propTypes = {
    id: PropTypes.string,
}

TravelBtnStarted.defaultProps  = {
    id: 'bnt-get-started',
}

export default TravelBtnStarted;