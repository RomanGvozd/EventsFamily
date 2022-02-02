import React from 'react';

import './ModalForm.css';

function ModalForm({openModal}) {

    


    return (
        <div className='backgroung-modal-form'>
            <form className='modal-form'>
                <p className='modal-form__text modal-form_item'>
                    Оставьте свои контакты, мы сами с Вами свяжемся!
                </p>
                <input className='modal-form__input modal-form_item' placeholder='Имя'></input>
                <input className='modal-form__input modal-form_item' placeholder='E-mail'></input>
                <input className='modal-form__input modal-form_item' placeholder='Телефон'></input>
                <select className='modal-form__select modal-form_item'>
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
                    className='modal-form__button modal-form_item'
                    onClick={openModal}
                >
                    Свяжитесь со мной
                </button>
            </form>
        </div>
    );
}

export default ModalForm;