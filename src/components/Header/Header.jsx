import React from 'react';
import { NavLink} from 'react-router-dom';
import './Header.scss';

function Header({openModalForm}) {

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
                    <li>
                        <a className='nav__item' href='/services'>
                            <NavLink to="/services">
                                УСЛУГИ
                            </NavLink>
                        </a>
                    </li>
                    <li>
                        <a className='nav__item' href='/benefits'>
                            <NavLink to="/benefits">
                                ПРЕИМУЩЕСТВА
                            </NavLink>
                        </a>
                    </li>
                    <li>
                        <a className='nav__item' href='/contacts'>
                            <NavLink to="/contacts">
                                КОНТАКТЫ
                            </NavLink>
                        </a>
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
