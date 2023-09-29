import { motion } from 'framer-motion';

import TravelBtnStarted from './TravelBtnStarted';

import iconSubtitle from '../../../resources/images/offer-subtitle-icon.svg';
import imagOfferOne from '../../../resources/images/Rectangle1.jpg'
import imagOfferTwo from '../../../resources/images/Rectangle2.jpg'
import imagOfferTree from '../../../resources/images/Rectangle3.jpg'
import './offerHeader.scss';

function OfferHeader(){

    const onClickBtn = (e)=>{
        e.preventDefault();
    }

    return (

        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className='header__offer'>

            <div className="header__offer__content">
                <div className="header__offer__content__subtitle font-circularStd-Bold">
                    <h5 className="header__offer__content__subtitle__title color-pink">Explore the world!</h5>
                    <img src={iconSubtitle}/>
                </div>

                <h1 className="font-circularStd-Bold">Travel <span className="color-pink">top destination</span> of the world</h1>

                <p className="header__offer__content__text">We always make our customer happy by providing as many choices as possible </p>

                 <from className='travel-started' method='GET' name='travel-started' onSubmit={onClickBtn}>
                    <TravelBtnStarted id={"bnt-get-started"} />
                    <TravelBtnStarted id={"bnt-demo-started"} />
                 </from>
                    
            </div>

            <div className="header__offer__content header__offer__content--w-auto">

                <div className='header__offer__content__item header__offer__content__item--big'>

                    <div className='header__offer__content__item__label'>

                        <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: .4}} className='header__offer__content__item__label__images'>
                            <img src={imagOfferOne} className='header__offer__content__item__label__images__img'/>
                        </motion.div>

                        <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: 1.2}} className='header__offer__content__item__label__icon'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.5806 3.44263C27.9137 2.75812 26.9266 2.50311 26.0062 2.77154L4.54408 9.01268C3.57302 9.28247 2.88474 10.0569 2.69932 11.0407C2.50991 12.042 3.17152 13.313 4.03587 13.8445L10.7466 17.9691C11.4349 18.3919 12.3233 18.2859 12.8928 17.7113L20.5773 9.97906C20.9641 9.5764 21.6043 9.5764 21.9913 9.97906C22.3781 10.3683 22.3781 10.9991 21.9913 11.4018L14.2934 19.1355C13.7225 19.7085 13.6158 20.6011 14.0359 21.2936L18.1363 28.0717C18.6165 28.8769 19.4435 29.3333 20.3505 29.3333C20.4573 29.3333 20.5773 29.3333 20.6841 29.3199C21.7245 29.1857 22.5514 28.4744 22.8582 27.4677L29.2209 6.03304C29.501 5.12036 29.2475 4.12715 28.5806 3.44263Z" fill="white"/>
                            </svg>
                        </motion.div>

                    </div>

                    <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: .2}} className='header__offer__content__item__label'>
                        <div className='header__offer__content__item__label__images'>
                            <img src={imagOfferTwo} className='header__offer__content__item__label__images__img'/>
                        </div>
                    </motion.div>

                </div>

                <div className='header__offer__content__item'>

                    {/* Icon image */}
                    <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: .6}} className='header__offer__content__item__label__images header__offer__content__item__label__images--big'>
                        <img src={imagOfferTree} className='header__offer__content__item__label__images__img'/>
                    </motion.div>

                    {/* Icon location */}
                    <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: .8}} className='header__offer__content__item__label__icon header__offer__content__item__label__icon--rectangle'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5768C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5768C14.8058 9.0478 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.0478 9.19423 10.5768Z" fill="#FACD49"/>
                        </svg>
                        <span className='header__offer__content__item__label__icon__text font-circularStd-Bold'>Top Places</span>
                    </motion.div>

                    {/* Icon profile */}
                    <motion.div initial={{y: -10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .7, delay: 1}} className='header__offer__content__item__label__icon header__offer__content__item__label__icon--color-orange'>
                        <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 13.7383C14.3395 13.7383 17.2835 10.7561 17.2835 7.03579C17.2835 3.31551 14.3395 0.333334 10.6667 0.333334C6.99399 0.333334 4.04991 3.31551 4.04991 7.03579C4.04991 10.7561 6.99399 13.7383 10.6667 13.7383ZM10.6667 17.0203C5.27237 17.0203 0.666748 17.8828 0.666748 21.3285C0.666748 24.7731 5.24435 25.6667 10.6667 25.6667C16.0598 25.6667 20.6667 24.8041 20.6667 21.3583C20.6667 17.9125 16.0891 17.0203 10.6667 17.0203ZM24.5306 9.78381H26.1347C26.795 9.78381 27.3334 10.3297 27.3334 10.9993C27.3334 11.6688 26.795 12.2148 26.1347 12.2148H24.5306V13.7845C24.5306 14.4541 23.9937 15 23.3321 15C22.6718 15 22.1334 14.4541 22.1334 13.7845V12.2148H20.5321C19.8703 12.2148 19.3334 11.6688 19.3334 10.9993C19.3334 10.3297 19.8703 9.78381 20.5321 9.78381H22.1334V8.21549C22.1334 7.54593 22.6718 7 23.3321 7C23.9937 7 24.5306 7.54593 24.5306 8.21549V9.78381Z" fill="white"/>
                        </svg>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}

export default OfferHeader;