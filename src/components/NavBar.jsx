import React, { useContext } from 'react'
import { useHistory, NavLink } from 'react-router-dom';
import { authTypes } from '../types/AuthTypes';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {

    const history = useHistory();
    const { dispatch } = useContext(AuthContext);

    const handleLogout = () =>{
        dispatch({ type: authTypes.logout })
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info p-3">
            <h2 className="navbar-brand">The Expanse Characters</h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <NavLink activeClassName='active text-white' className="nav-link" aria-current='page' to='/earth' href="#">
                    Earth
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName='active text-white' className="nav-link" aria-current='page' to='/mars' href="#">
                    Mars
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName='active text-white' className="nav-link" aria-current='page' to='/search' href="#">
                    Search
                </NavLink>
                </li>
            </ul>
            <div className='d-flex'>
                <button className='btn btn-danger' onClick={handleLogout}>Log out</button>
            </div>
            </div>
        </nav>
    )
}

export default NavBar