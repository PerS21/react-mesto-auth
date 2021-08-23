import good from "../../src/images/GoodReg.png";
import bad from "../../src/images/BadReg.png";



function InfoTooltip(props) {
    let isOpen = false;
    const answerStatus = true;
    function onClose(){
        console.log('asd')
    }
    return (
        isOpen &&
        <div className="popup infoTooltipPopup">
            <div className="popup__container popup__container_content-infoTooltip">
                <img src={answerStatus ? good : bad} alt='dd' />
                <p className='infoTooltipPopup__text'>{answerStatus ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
                <button
                    type="button"
                    className={`popup__close-button button ${props.name}-form__close-button`}
                    onClick={onClose}
                ></button>
            </div>

        </div>
    );
}

export default InfoTooltip;
