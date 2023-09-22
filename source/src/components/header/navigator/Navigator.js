import Logo from '../../logo/Logo';
import Menu from './menu/Menu';
import Login from './login/Login';

import './navigator.scss';

function Navigator(){
    
    return (
        <div className='nav'>
            <Logo />
            <Menu />
            <Login />
        </div>
    )
}

export default Navigator;