import React from 'react';

import './Modal.css';

function Modal() {
    return (
        <div className='backgroung-modal'>
            <form className='modal'>
                <h1 className='modal__logo'>
                    Спасибо!
                </h1>
                <p className='modal__text'>
                    Мы свяжимся с Вами в ближайшее время.
                </p>
                <button className='modal__button'>
                    Хорошо
                </button>
            </form>
        </div>
    );
}

export default Modal;