import React from 'react';

import './Home.scss';

function Home({openModalForm}) {
    return (
        <section className='home'>
            <h1 className='home__title'>
                Events Family
            </h1>
            <h2 className='home__sub-title'>
                ОТ ИДЕИ ДО ВОПЛОЩЕНИЯ
            </h2>
            <p className='home__text'>
                Наше агенство поможет Вам организовать мероприятие и сделать его незабываемым
            </p>
            <button className='home__button' onClick={openModalForm}>
                Заказать мероприятие
            </button>
        </section>
    );
}

export default Home;