import React from 'react';
import { NavLink } from 'react-router-dom';

const Naviga = () => {
    return (
     <div className="navigation">
        <ul>
         <NavLink to="/"  className="hover" activeClassName="nav-active">
                <li>accueil</li>
         </NavLink>
        <NavLink to="/contact" activeClassName="nav-active" className="hoveer">
                <li>Contact</li>
            </NavLink>
        </ul>
    </div>  
    );
};
export default Naviga;