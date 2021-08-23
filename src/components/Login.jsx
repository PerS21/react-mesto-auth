import SingForm from './SingForm';

function Login() {

    const name = 'dads';
    const title = 'dsadddd';
    const submitButtonText = 'knopka';

    function onSubmit(e) {
        e.preventDefault();
        console.log('onSubmit!!!!')
    }
    function handleChangeDescription() {
        console.log('handleChangeDescription')
    }
    function handleChangeName() {
        console.log('handleChangeName')
    }

    return (
        <div className='singСonteiner'>
            <SingForm title='Здесь авторизация!!!' onSubmit={onSubmit} submitButtonText='Войти'>
                <div className="form__inputs">
                    <input
                        value={name || ''}
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
        </div >
    );
}

export default Login;

