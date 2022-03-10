import React from 'react';

import './Modal.scss';

function Modal({handleSubmitModal}) {

    return (
        <div className='backgroung-modal'>
            <form className='modal'>
                <h1 className='modal__logo'>
                    Спасибо!
                </h1>
                <p className='modal__text'>
                    Мы свяжимся с Вами в ближайшее время.
                </p>
                <button 
                className='modal__button'
                onClick={handleSubmitModal}
                >
                    Хорошо
                </button>
            </form>
        </div>
    );
}

export default Modal;