import { Route } from 'react-router-dom';


function ProtectedRoute() {
    return (
      <Route path='/'>
        <div>ProtectedRoute</div>
      </Route>
    );
  }
  
  export default ProtectedRoute;