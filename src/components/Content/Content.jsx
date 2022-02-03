import React from 'react';
// import { Routes, Route } from "react-router-dom";

import LeftNav from '../Nav/LeftNav/LeftNav';
import RightNav from '../Nav/RightNav/RightNav';
import Slider from '../Slider/Slider';

import './Content.scss';

function Content() {

    return (
        <main className='content'>
            <LeftNav />
                <Slider />
            <RightNav />
        </main>
    );
}


export default Content;