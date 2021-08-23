import vectorLogo from "../../src/images/VectorLogo.svg";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  function click() {
    history.push('/')
  }

  return (
    <header className="header">
      <img src={vectorLogo} alt="место" className="header__img" onClick={click} />
    </header>
  );
}

export default Header;
