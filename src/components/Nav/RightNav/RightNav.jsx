import React from 'react';
import {Link, useLocation} from "react-router-dom";
import routs from "../../../common/routs.config";

import './RightNav.scss';

function RightNav() {
    
   const {pathname} = useLocation();
   const index = routs.indexOf(pathname);

   const nextLink = routs[index+1] || routs[3];
   const prevLink = routs[index-1] || routs[0];

    return (
        <div className='content__right-nav'>
            <div className='right-nav__wrapper-num'>
                <p className={routs[index] === '/' ? 'right-nav__num right-nav__num__active' : 'right-nav__num' }>01</p>
                    {routs[index] === '/' ? <div className='num__active'></div> : <></> }

                <p className={routs[index] === '/services' ? 'right-nav__num right-nav__num__active' : 'right-nav__num' }>02</p>
                    {routs[index] === '/services' ? <div className='num__active'></div> : <></> }

                <p className={routs[index] === '/benefits' ? 'right-nav__num right-nav__num__active' : 'right-nav__num' }>03</p>
                    {routs[index] === '/benefits' ? <div className='num__active'></div> : <></> }

                <p className={routs[index] === '/contacts' ? 'right-nav__num right-nav__num__active' : 'right-nav__num' }>04</p>
                    {routs[index] === '/contacts' ? <div className='num__active'></div> : <></> }
                    
            </div>
            <div className='right-nav__wraperr-btn'>
                <Link
                to={prevLink}
                className='right-nav__btn-left right-nav__btn' 
                >
                </Link>
                <Link 
                to ={nextLink}
                className='right-nav__btn-right right-nav__btn'
                >
                </Link>
            </div>
        </div>
    );
}

export default RightNav;