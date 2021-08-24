import SingForm from './SingForm';
import InfoTooltip from './InfoTooltip';
import React, { useState } from 'react';


function Register(props) {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const formName = 'register';

    function handleChangeMail(e) {
        setMail(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        props.onRegisration(mail, password);
    }

    return (
        <div className='singСonteiner'>
                <SingForm title='Здесь регистрация!!!' onSubmit={onSubmit} submitButtonText='Зарегистрироваться' formName={formName}>
                <div className="form__inputs">
                    <input
                        value={mail || ''} 
                        id="mail"
                        required
                        minLength="2"
                        maxLength="40"
                        name="fild_name"
                        type="email"
                        placeholder="Email"
                        className="singForm__input profile-edit-form__input-fild-name"
                        onChange={handleChangeMail}
                    />
                    <span id="mail-error" className="form__input-error"></span>
                    <input
                        value={password || ''} 
                        id="password"
                        required
                        minLength="2"
                        maxLength="200"
                        name="fild_about"
                        type="text"
                        placeholder="Пароль"
                        className="singForm__input profile-edit-form__input-fild-about"
                        onChange={handleChangePassword}
                    />
                    <span id="password-error" className="form__input-error"></span>
                </div>
            </SingForm>
            <p className='onSingIn__text'>Уже зарегистрированы? <a href='sign-in' className='onSingIn__link'>Войти</a></p>
            <InfoTooltip isOpen={props.isOpen} onClose={props.onClose}/>
        </div >
    );
}

export default Register;