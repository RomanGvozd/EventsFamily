import React from 'react';
// import { Routes, Route } from "react-router-dom";

import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';
import Slider from '../Slider/Slider';

import './Content.css';

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