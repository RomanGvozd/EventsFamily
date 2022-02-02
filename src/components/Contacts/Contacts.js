import React from 'react';

import './Contacts.css';

function Contacts() {
    return (
        <main className='contacts'>
            <h1 className='contacts__logo1'>
                Наши
            </h1>
            <h1 className='contacts__logo2'>
                КОНТАКНТЫ
            </h1>
            <div className='contacts__wrapper'>
                <div className='contacts__wrapper-left'>
                    <p className='contacts__sity'>
                        <div className='contacts__sity-item contacts__item'></div>Киев
                    </p>
                    <a className='contacts__number1' href=''>
                        <div className='contacts__number-item contacts__item'></div>+380673186746 
                    </a>
                    <a className='contacts__number2' href=''>
                        +380636291554
                    </a>
                    <a className='contacts__email' href=''>
                        <div className='contacts__email-item contacts__item'></div>eventsxfamily@gmail.com
                    </a>
                </div>
                <form className='contacts-form'>
                    <p className='contacts-form__text '>
                        Оставьте свои контакты, мы сами с Вами свяжемся!
                    </p>
                    <input className='contacts-form__input contacts-form_item' placeholder='Имя'></input>
                    <input className='contacts-form__input contacts-form_item' placeholder='E-mail'></input>
                    <input className='contacts-form__input contacts-form_item' placeholder='Телефон'></input>
                    <select className='contacts-form__select contacts-form_item'>
                        <option>
                            Мероприятие
                        </option>
                    </select>
                    <button 
                    className='contacts-form__button contacts-form_item'
                    // onClick={openModal}
                    >
                        Свяжитесь со мной
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Contacts;