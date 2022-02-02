import React, { useRef } from 'react';

import Home from '../Home/Home';
import Services from '../Services/Services';
import Benefits from '../Benefits/Benefits';
import Contacts from '../Contacts/Contacts';

import './Slider.css';

function Slider() {

    const slider = useRef(null);
    
    let position = 0;

    const prevHandler = () => {
        position += 100;
        if (position > 0) {
            position = 0;
        }
        slider.current.childNodes.forEach(element => {
            element.style = `transform: translatex(${position}%)`
        });
    }

    const nextHandler = () => {
        position -= 100;
        if (position < -300) {
            position = -300;
        }
        slider.current.childNodes.forEach(element => {
            element.style = `transform: translatex(${position}%)`
        });
    }

    return (
        <div className='slider'>
            <div className='slider__track' ref={slider}>
                <Home />
                <Services />
                <Benefits />
                <Contacts />
            </div>
            <button onClick={prevHandler}>{'<'}</button>
            <button onClick={nextHandler}>{'>'}</button>
        </div>
    );
}


export default Slider;