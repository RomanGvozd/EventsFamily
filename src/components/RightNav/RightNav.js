import React from 'react';

import './RightNav.css';

function RightNav() {



    return (
        <div className='content__right-nav'>
            <div className='right-nav__wrapper-num'>
                <p className='right-nav__num'>01</p>
                <p className='right-nav__num'>02</p>
                <p className='right-nav__num'>03</p>
                <p className='right-nav__num'>04</p>
            </div>
            <div className='right-nav__wraperr-btn'>
                <button 
                className='right-nav__btn-left right-nav__btn'    
                >
                </button>
                <button 
                className='right-nav__btn-right right-nav__btn'
                >
                </button>
            </div>
        </div>
    );
}

export default RightNav;