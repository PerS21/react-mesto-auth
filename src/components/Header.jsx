import vectorLogo from "../../src/images/VectorLogo.svg";
import { useHistory } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';



function Header(props) {
  const history = useHistory();
  function click() {
    history.push('/')
  }

  function onClick() {
    localStorage.removeItem('jwt');
    props.setisLoggedIn(false);
    history.push('/sign-in');
  }

  return (
    <header className="header">
      <img src={vectorLogo} alt="место" className="header__img" onClick={click} />
      <Switch>
        <Route path="/sign-up">
          <a href='sign-in' className='header__Link header__text'>Войти</a>
        </Route>
        <Route path="/sign-in">
          <a href='sign-up' className='header__Link header__text'>Регистрация</a>
        </Route>
        <Route path="/">
          <div className='header__auth-section'>
            <p className='header__text'>{localStorage.getItem('email')}</p>
            <button className='header__text header__button' onClick={onClick}>Выйти</button>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
