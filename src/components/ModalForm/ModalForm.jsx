import React from 'react';

import './ModalForm.scss';

function ModalForm({openModal}) {

    return (
        <div className='backgroung-modal-form'>
            <form className='modal-form'>
                <p className='modal-form__text modal-form__item'>
                    Оставьте свои контакты, мы сами с Вами свяжемся!
                </p>
                <input className='modal-form__input modal-form__item' placeholder='Имя'></input>
                <input className='modal-form__input modal-form__item' placeholder='E-mail'></input>
                <input className='modal-form__input modal-form__item' placeholder='Телефон'></input>
                <select className='modal-form__select modal-form__item'>
                    <option>
                        Мероприятие
                    </option>
                    <option>
                        Мероприятие
                    </option>
                    <option>
                        Мероприятие
                    </option>
                    <option>
                        Мероприятие
                    </option>
                </select>
                <button 
                    className='modal-form__button modal-form__item'
                    onClick={openModal}
                >
                    Свяжитесь со мной
                </button>
            </form>
        </div>
    );
}

export default ModalForm;