import React, { useState } from 'react';
// import { Routes, Route, NavLink} from 'react-router-dom';

import Datenschutz from '../rechtliches/datenschutz';
import Impressum from '../rechtliches/impressum';
import App from '../../App';

import './footer.scss';
import rocket from '../../assets/icons/rocket.png';

export default function footer(){
    return (
        <div className="footer">
            {/* <nav>
                <NavLink to="/Impressum"> <h2> Impressum </h2> </NavLink>
                <NavLink to="/datenschutz"> <h2> Datenschutz</h2> </NavLink>
                <a href="#"> <img src={rocket} alt="Beam me up, Scotty!" className='rocket'/> </a>
            </nav>
            
            <Routes>
                      <Route index element={<App/>} />
                      <Route path="Impressum" element={<Impressum/>}/>
                      <Route path="Datenschutz" element={<Datenschutz/>}/>
                      <Route path="*" element={<NoMatch />}/>
            </Routes> */}
        </div>
    )
}