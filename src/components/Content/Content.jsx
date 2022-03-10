import React, { useState } from 'react';
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from 'react-slide-routes';

import LeftNav from '../Nav/LeftNav/LeftNav';
import RightNav from '../Nav/RightNav/RightNav';

import Home from '../Content/ContentPages/Home/Home';
import Benefits from '../Content/ContentPages/Benefits/Benefits';
import Contacts from '../Content/ContentPages/Contacts/Contacts';
import Services from '../Content/ContentPages/Services/Services';

import './Content.scss';

function Content({openModalForm, openModal}) {

    const location = useLocation();

    return (
        <main className='content'>
            <LeftNav />
                    <SlideRoutes location={location}>
                        <Route path="/" element={<Home openModalForm={openModalForm}/>} />
                        <Route path="/benefits" element={<Benefits />} />
                        <Route path="/contacts" element={<Contacts openModal={openModal} />} />
                        <Route path="/services" element={<Services />} />
                    </SlideRoutes>
            <RightNav />
        </main>
    );
}


export default Content;