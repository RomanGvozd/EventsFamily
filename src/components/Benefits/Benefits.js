import React from 'react';

import './Benefits.css';

function Benefits() {
    return (
        <main className='benefits'>
            <h1 className='benefits__logo1'>
                Наши
            </h1>
            <h1 className='benefits__logo2'>
                ПРЕИМУЩЕСТВА
            </h1>
            <div className='benefits__wrapper'>
                <div className='benefits__wrapper-item'>
                    <div className='wrapper-item__image-mobility wrapper-item__image'>
                    </div>
                    <h3 className='wrapper-item__logo'>
                        Мобильность
                    </h3>
                    <p className='wrapper-item__text'>
                        Возможность организовать мероприятие в любое время и в любом месте
                    </p>
                </div>
                <div className='benefits__wrapper-item'>
                    <div className='wrapper-item__image-budget wrapper-item__image'>
                    </div>
                    <h3 className='wrapper-item__logo'>
                        Бюджетность
                    </h3>
                    <p className='wrapper-item__text'>
                        Возможность организовать мероприятие в рамках любого бюджета
                    </p>
                </div>
                <div className='benefits__wrapper-item'>
                    <div className='wrapper-item__image-operativenes wrapper-item__image'>
                    </div>
                    <h3 className='wrapper-item__logo'>
                        Оперативность
                    </h3>
                    <p className='wrapper-item__text'>
                        Возможность заказать мероприятие с сегодня на завтра
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Benefits;