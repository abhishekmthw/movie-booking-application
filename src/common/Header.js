import React from 'react';
import "./Header.css";
import Logo from './logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} id="logo" alt="logo" />
            </div>
        );
    }
}

export default Header;