import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
     <div className="navigation">
        <ul>
         <NavLink to="/" exact className="hover" activeClassName="nav-active">
        <li>
            accueil
        </li>
         </NavLink>

        <li className="nav-portfolio">Services
        <ul className="nav-projects">
            <NavLink to="/project-1" activeClassName="nav-active" 
            className="detail">
                <li>Pharmacie</li>
            </NavLink>
            <NavLink to="/project-2" activeClassName="nav-active" 
            className="detail">
                <li>Marché</li>
            </NavLink>
            <NavLink to="/project-3" activeClassName="nav-active" 
            className="detail">
                <li>Coursier</li>
            </NavLink>
            <NavLink to="/project-4" activeClassName="nav-active" 
            className="detail">
                <li>Quotidien</li>
            </NavLink>
        </ul>
        </li>
        <NavLink to="/contact" activeClassName="nav-active" 
            className="hoveer">
                <li>Contact</li>
            </NavLink>


        </ul>
    </div>  
    );
};

export default Navigation;