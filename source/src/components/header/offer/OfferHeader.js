import { useState } from "react";

import iconSubtitle from '../../../resources/images/offer-subtitle-icon.svg';
import iconPlay from '../../../resources/images/travel-started-icon-play.svg';
import './offerHeader.scss';

function OfferHeader(){

    const onClickBtn = (e)=>{
        e.preventDefault();
    }

    return (

        <div className='header__offer'>

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

            </div>

        </div>
    )
}

function TravelBtnStarted({id}){
    
    if(id == 'bnt-get-started'){
        return (
            <button className='travel-started__btn' id={id} name="travel-started-btn-start" type="sybmit">Get Started</button>
        )
    } else {
        return (
            <button className='travel-started__btn travel-started__btn--bg-transparent' id={id} name="travel-started-btn-demo" type="sybmit">
                <span>Watch Demo</span>
                <img src={iconPlay}/>;
            </button>
        )
    }

}

export default OfferHeader;