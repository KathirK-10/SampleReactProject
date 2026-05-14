import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLogged=localStorage.getItem('isLoggedIn');
    return isLogged ? children : <Navigate to="/login"/>
}

export default ProtectedRoute