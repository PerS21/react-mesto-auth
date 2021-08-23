import { Route } from 'react-router-dom';


function ProtectedRoute(props) {
    return (
      <Route path='/' component={props.component}>
        <img src={vectorLogo} alt="место" className="header__img" />
      </Route>
    );
  }
  
  export default ProtectedRoute;