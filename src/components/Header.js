import React from 'react'
import './Header.css'
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src={logo} alt="logo" />
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon" />            </div>
            <div className="header_nav ">
                <Link to={!user && "/login"} >
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello Guest
                    </span>
                        <span className="header_optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Return
                    </span>
                    <span className="header_optionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Order
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon className="header_basketIcon" />
                        <span class="header_optionLineTwo header_basketCount">
                            {basket?.length}
                        </span>
                    </div>

                </Link>
            </div>
        </div>
    )
}

export default Header
