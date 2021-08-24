import good from "../../src/images/GoodReg.png";
import bad from "../../src/images/BadReg.png";



function InfoTooltip(props) {
    const answerStatus = true;
    return (
        props.isOpen &&
        <div className="popup infoTooltipPopup">
            <div className="popup__container popup__container_content-infoTooltip">
                <img src={answerStatus ? good : bad} alt='dd' />
                <p className='infoTooltipPopup__text'>{answerStatus ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
                <button
                    type="button"
                    className={`popup__close-button button ${props.name}-form__close-button`}
                    onClick={props.onClose}
                ></button>
            </div>

        </div>
    );
}

export default InfoTooltip;
