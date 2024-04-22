import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__nav">
                    <h1 className={"header__logo"}>
                        <img src="https://nomad.iuk.kg/wp-content/uploads/2022/07/cropped-NC_logo.png" alt="" />
                    </h1>
                    <ul className={"header__menu"}>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/About"}>
                            о нас
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                            Направления
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                            Цены
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/Students"}>
                            Список студентов
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/Contact"}>
                            Контакты
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/CRUD"}>
                            CRUD
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                            <FaInstagram />
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                            <FaWhatsapp />
                            </NavLink>
                        </li>
                        <li className={"header__menu-item"}>
                            <NavLink to={"/"}>
                            <FaTelegram />
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </header>
    );
};
export default Header;