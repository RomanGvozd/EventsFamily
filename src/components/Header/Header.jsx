import React from 'react';
import { NavLink, useLocation} from 'react-router-dom';
import routs from "../../common/routs.config";

import './Header.scss';

function Header({openModalForm}) {
    const {pathname} = useLocation();
    const index = routs.indexOf(pathname);

    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='nav__wrapper'>
                    <li>
                        <a className='nav__item' href='/'>
                            <NavLink to="/">
                                <div className='nav__logo'>
                                </div>
                            </NavLink>
                        </a>
                    </li>
                    <li className={routs[index] === '/services' ? 'nav__item nav__item__active nav__item__active-weight' : 'nav__item'}>
                        <NavLink to="/services">
                            УСЛУГИ
                        </NavLink>
                    </li>
                    <li className={routs[index] === '/benefits' ? 'nav__item nav__item__active nav__item__active-weight' : 'nav__item'}>
                        <NavLink to="/benefits">
                            ПРЕИМУЩЕСТВА
                        </NavLink>
                    </li>
                    <li className={routs[index] === '/contacts' ? 'nav__item nav__item__active nav__item__active-weight' : 'nav__item'}>
                        <NavLink to="/contacts">
                            КОНТАКТЫ
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button 
            className='header__button'
            onClick={openModalForm}
            >
            Связаться
            </button>
        </header>
    );
}

export default Header;
