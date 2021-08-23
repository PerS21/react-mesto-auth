import SingForm from './SingForm';
import InfoTooltip from './InfoTooltip';

function Register() {

    const formName = 'register';

    function onSubmit(e) {
        e.preventDefault();
        console.log('onSubmit1111')
    }
    function handleChangeDescription() {
        console.log('handleChangeDescription')
    }
    function handleChangeName() {
        console.log('handleChangeName')
    }

    return (
        <div className='singСonteiner'>
                <SingForm title='Здесь регистрация!!!' onSubmit={onSubmit} submitButtonText='Зарегистрироваться' formName={formName}>
                <div className="form__inputs">
                    <input
                        value={'dqwd'}
                        id="name"
                        required
                        minLength="2"
                        maxLength="40"
                        name="fild_name"
                        type="text"
                        placeholder="Название"
                        className="singForm__input profile-edit-form__input-fild-name"
                        onChange={handleChangeName}
                    />
                    <span id="name-error" className="form__input-error"></span>
                    <input
                        value={'dasd'}
                        id="about"
                        required
                        minLength="2"
                        maxLength="200"
                        name="fild_about"
                        type="text"
                        placeholder="Проффесия"
                        className="singForm__input profile-edit-form__input-fild-about"
                        onChange={handleChangeDescription}
                    />
                    <span id="about-error" className="form__input-error"></span>
                </div>
            </SingForm>
            <p className='onSingIn__text'>Уже зарегистрированы? <a href='sign-in' className='onSingIn__link'>Войти</a></p>
            <InfoTooltip />
        </div >
    );
}

export default Register;