import vectorLogo from "../../src/images/VectorLogo.svg";
import { useHistory } from "react-router-dom";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute.jsx";



function Header() {
  const history = useHistory();
  function click() {
    history.push('/')
  }

  function onClick(){
    console.log('dasdasd')
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
            <p className='header__text'>меил</p>
            <button className='header__text header__button' onClick={onClick}>Выйти</button>
          </div>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
