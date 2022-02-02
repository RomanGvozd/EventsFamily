import React from 'react';

import './Services.css';

function Services() {
    return (
        <section className='services'>
            <h1 className='services__logo1'>
                Организация
            </h1>
            <h1 className='services__logo2'>
                МЕРОПРИЯТИЙ
            </h1>
            <div className='services__wrapper'>
                <div className='services__wrapper1'>
                    <div className='wrapper1__image'>
                    </div>
                    <h3 className='wrapper1__logo'>
                        Семейные
                    </h3>
                    <ul className='wrapper1__list'>
                        <li className='wrapper1__list-item'>
                            Тимбилдинги
                        </li>
                        <li className='wrapper1__list-item'>
                            Конференции
                        </li>
                        <li className='wrapper1__list-item'>
                            Дни рождения компаний
                        </li>
                    </ul>
                </div>
                <div className='services__wrapper2'>
                    <div className='wrapper2__image'>
                    </div>
                    <h3 className='wrapper2__logo'>
                        Корпоративы
                    </h3>
                    <ul className='wrapper2__list'>
                        <li className='wrapper2__list-item'>
                            Свадьбы
                        </li>
                        <li className='wrapper2__list-item'>
                            Выписка из роддома
                        </li>
                        <li className='wrapper2__list-item'>
                            Дни рождения
                        </li>
                        <li className='wrapper2__list-item'>
                            Выпускные
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Services;