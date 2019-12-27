import React from 'react'
import './header.sass'
import { NavLink } from "react-router-dom";
import logo from './logo.png'
//import { openModal } from "../../actions";
import withService from "../hoc/with-service";
import { connect } from "react-redux";
import { openLoginModal } from "../../actions";
import { openRegistrationModal } from "../../actions";

const Header = ({ openRegistrationModal, openLoginModal, user, cart }) => {
    const { sum, count } = cart;

    return (
        <div className={"header"}>
            <div className="container">
                <NavLink to="/" className="logo">
                    <img src={logo} alt="" />
                </NavLink>
                <nav>
                    <NavLink to={"/catalog/837382"} className="item">Iphone</NavLink>
                    <NavLink to={"/catalog/736726"} className="item">Ipad</NavLink>
                    <NavLink to={"/catalog/111"} className="item">MacBook</NavLink>
                    <NavLink to={"/catalog/222"} className="item">IMac</NavLink>
                    <NavLink to={"/catalog/333"} className="item">Accessories</NavLink>
                    <NavLink to={"/catalog/444"} className="item">Apple Watch</NavLink>
                </nav>

                {
                    user ?
                        <div className="login" >Hello, {user.first_name}</div>
                        :
                        <div className={"ingoing"}>
                            <div className={"login"} onClick={openLoginModal}>Login</div>
                        </div>
                }
                {
                    user ?
                        ""
                        :
                        <div className="regis" onClick={openRegistrationModal}>
                            Registration
                        </div>
                }

                <NavLink to={"/shopping-cart"} className="cart-item">
                    <div className="sum">{sum}$</div>
                    <i className="fas fa-shopping-cart"></i>
                    <div className="count">{count}</div>
                </NavLink>
            </div>
        </div>
    )
};

const mapStateToProps = ({ user, cart }) => {
    return { user, cart }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openRegistrationModal: () => dispatch(openRegistrationModal()),
        openLoginModal: () => dispatch(openLoginModal())
    }
};

export default (
    withService(
        connect(mapStateToProps, mapDispatchToProps)(Header)
    )
)

