import Navigator from './navigator/Navigator';
import './header.scss';

import detect from '../../resources/scripts/detect.js';
function Header(){
    return (
        <div className='header'>
            <div className={`header ${detect ? 'container container--mobil' : 'container'}`}>
                <Navigator/> 
            </div>

        </div>
    )
}

export default Header;