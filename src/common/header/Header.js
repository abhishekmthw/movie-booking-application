import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Logo from './../../assets/logo.svg';

class Header extends React.Component {
    render() {
        const display = this.props.display;
        return (
            <div className="header">
                <img src={Logo} id="logo" alt="logo" />
                <div style={{float: "right", display: "flex"}}>
                    <div style={{padding: "3px 15px"}}>
                        {display ? <Button variant="contained" color="primary"><Link to={`/book-show/${this.props.id}`} style={{textDecoration: "none", color: "white"}} >BOOK SHOW</Link></Button> : null}
                    </div>
                    <div style={{padding: "3px 15px"}}>
                        <Button variant="contained">LOGIN</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;