import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './search.scss';

function Search(){
    return(
        <div className="header__search">
                <input className='header__search' type='text' placeholder='Искать на сайте...'/>
                <span className='header__search__icon'></span>
        </div>
    )
}

export default Search;