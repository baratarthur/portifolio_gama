import React from 'react';

const Footer = () => (
    <footer >
        <h5 className='left title-footer' style={{flex:'auto'}} >
            JUNTE-SE A NÓS
        </h5>
        <div className='right links-sociais' style={{flex:'auto'}}>
            <a className="icon" target="_blank" href="https://www.facebook.com/Mudar-o-Mundo-108203170589998/" >
                <img src={require('../assets/facebook-logo.png')} width='40px' height='40px' />
            </a>
            <a className="icon" target="_blank" href="https://www.instagram.com/mudaromundobrazil" >
                <img src={require('../assets/instagram-logo.png')} width='40px' height='40px' />
            </a>
        </div>
    </footer>
);

export default Footer;