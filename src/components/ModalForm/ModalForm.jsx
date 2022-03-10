import React, {useState, useEffect} from 'react';

import './ModalForm.scss';

function ModalForm({setModal, setModalForm}) {

    const [nameBackground, setNameBackground] = useState('modal-form__input modal-form__item');
    const [emailBackground, setEmailBackground] = useState('modal-form__input modal-form__item');
    const [numberBackground, setNumberBackground] = useState('modal-form__input modal-form__item');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const [nameDirty, setDirtyName] = useState(false);
    const [emailDirty, setDirtyEmail] = useState(false);
    const [numberDirty, setDirtyNumber] = useState(false);

    const [nameError, setErrorName] = useState('Введите пожалуйста имя');
    const [emailError, setErrorEmail] = useState('Введите пожалуйста e-mail');
    const [numberError, setErrorNumber] = useState('Введите пожалуйста номер телефона');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(nameError || emailError || numberError){
            setFormValid(false);
        } else {
            setFormValid(true);
        }

    }, [nameError, emailError, numberError])

    const handleBlur = (e) => {
        switch(e.target.name) {
            case 'name':
                setDirtyName(true);
                break
            case 'email':
                setDirtyEmail(true);
                break
            case 'number':
                setDirtyNumber(true);
                break
        }
    }

    const handleChangeName = ({target}) => {
        setName(target.value);
        if(name.length < 2) {
            setErrorName('Ваше имя слишком короткое');
            setNameBackground('modal-form__input modal-form__item modal-form__input__error');

        } else {
            setErrorName('');
            setNameBackground('modal-form__input modal-form__item modal-form__input__select');
        } 
    }

    const handleChangeEmail = ({target}) => {
        setEmail(target.value);
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(!re.test(String(target.value).toLowerCase())) {
            setErrorEmail('Введите корректный e-mail');
            setEmailBackground('modal-form__input modal-form__item modal-form__input__error');
        }
        else {
            setErrorEmail('');
            setEmailBackground('modal-form__input modal-form__item modal-form__input__select');
        }
    }

    const handleChangeNumber = ({target}) => {
        setNumber(target.value);
        if(number.length < 8) {
            setErrorNumber('Ваше номер слишком короткий');
            setNumberBackground('modal-form__input modal-form__item modal-form__input__error');
        }else {
            setErrorNumber('')
            setNumberBackground('modal-form__input modal-form__item modal-form__input__select');
        }

    }

    const handleSubmit = () => {
        const token = "5113380766:AAGsgvya3_FJkocahZrD7AbCDF0AcN4H4-c";
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=1607328749&text=Имя: ${name}, e-mail: ${email}, телефон: ${number}`;
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, true);
        xhttp.send();
        setModalForm(false);
        setModal(true);
    }

    return (
        <div className='backgroung-modal-form'>
            <div className='modal-form'>
                <p className='modal-form__text modal-form__item'>
                    Оставьте свои контакты, мы сами с Вами свяжемся!
                </p>
                <input 
                className={nameBackground}
                placeholder='Имя'
                onChange={handleChangeName}
                onBlur={e => handleBlur(e)}
                value={name}
                name='name'
                >
                </input>

                {(nameDirty && nameError) && <p className='modal-form__input__text-error'>{nameError}</p>}

                <input 
                className={emailBackground} 
                placeholder='E-mail'
                onChange={handleChangeEmail}
                onBlur={e => handleBlur(e)}
                value={email}
                name='email'
                >
                </input>

                {(emailDirty && emailError) && <p className='modal-form__input__text-error'>{emailError}</p>}

                <input
                className={numberBackground} 
                placeholder='Телефон'
                type='number'
                onChange={handleChangeNumber}
                onBlur={e => handleBlur(e)}
                value={number}
                name='number'
                >
                </input>

                {(numberDirty && numberError) && <p className='modal-form__input__text-error'>{numberError}</p>}

                <select className='modal-form__select modal-form__item'>
                    <option>
                        Мероприятие
                    </option>
                    <option>
                        Корпоративы
                    </option>
                    <option>
                        Тимбилдинги
                    </option>
                </select>
                <button 
                    className='modal-form__button modal-form__item'
                    // onClick={openModal}
                    onClick={handleSubmit}
                    type='submit'
                    disabled={!formValid}
                >
                    Свяжитесь со мной
                </button>
            </div>
        </div>
    );
}

export default ModalForm;