function SingForm(props) {
    const name = 'dads';

    
    function handleChangeDescription() {
        console.log('handleChangeDescription')
    }
    function handleChangeName() {
        console.log('handleChangeName')
    }

    return (
        <form name={`${name}-form`} className={`singForm ${name}-form`} onSubmit={props.onSubmit}>
            <h2 className="form__title">{props.title}</h2>
            {props.children}
            <button
                type="submit"
                className={`singForm__button-save  ${name}-form__button-save`}
            >
                {props.submitButtonText}
            </button>
        </form>
    )
}

export default SingForm;
