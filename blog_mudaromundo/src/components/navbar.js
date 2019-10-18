import React from 'react';
import { Link } from 'react-router-dom';
import { ModalLanding } from '../components';

const Navbar = () => (
    <div className="navbar-fixed" style={{marginBottom:"100px"}}>
        <nav className="nav-extended row white" >
            <div className="nav-wrapper row" style={{display:'flex', alignItems:'center'}} >
                    <div className="col s4 m8" >
                        <img 
                            height="60px"
                            src={require('../assets/logo2.jpg')}
                            alt='logo'/>
                        <Link
                            to='/'
                            className="center-align hide-on-small-only m8"
                            style={{padding:"0 10px", fontSize: "2rem", color:'#28a699'}} >
                                Mudar o Mundo
                        </Link>
                    </div>
                    <div className="col s8 m4" >
                        <ModalLanding
                            idForm={"formAjudar"}
                            title={<span><b>Quero Ajudar!</b></span>}
                            small={true}
                        />
                    </div>
            </div>
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab">
                        <Link style={{color:'#28a699'}} to='/' >
                            Notícias
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    </div>
);

export default Navbar;
