import React from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

function Header({openModalForm}) {

    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='nav__wrapper'>
                    <li className='nav__wrapper-item'>
                        <a className='nav__item' href='/'>
                            <Link to="/">
                                <div className='nav__logo'>
                                </div>
                            </Link>
                        </a>
                    </li>
                    <li className='nav__wrapper-item'>
                        <a className='nav__item' href='/services'>
                            <Link to="/services">
                                УСЛУГИ
                            </Link>
                        </a>
                    </li>
                    <li className='nav__wrapper-item'>
                        <a className='nav__item' href='/benefits'>
                            <Link to="/benefits">
                                ПРЕИМУЩЕСТВА
                            </Link>
                        </a>
                    </li>
                    <li className='nav__wrapper-item'>
                        <a className='nav__item' href='/contacts'>
                            <Link to="/contacts">
                                КОНТАКТЫ
                            </Link>
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
