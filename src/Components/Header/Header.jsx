import React from 'react';
import "./Header.scss"
import Button from '../Button/Button';

const Header = () => {
    return (
        <div className="main-header">
            <div className='header'>
            <div>
                LOGO
            </div>
            <div>
                <Button/>
            </div>
            </div>
        </div>
    )
}

export default Header;