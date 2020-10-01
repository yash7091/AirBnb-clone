import React from 'react'
import './Header.css'
import Icon from './Icon.jpg'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header">
            <Link to="/">
            <img
            className="header__icon"
            src={Icon}
            alt=""/>
            </Link>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Beacome a host</p>
                <LanguageIcon className="icon"/>
                <ExpandMoreIcon className="icon"/>
                <Avatar className="icon"/>
            </div>
        </div>
    )
}

export default Header
