import React from 'react';

import './LeftNav.scss';

function LeftNav() {
  return (
    <nav className='content__nav'>
        <a className='nav__item' href=''>Facebook</a>
        <a className='nav__item' href=''>Instagram</a>
    </nav>
  );
}

export default LeftNav;