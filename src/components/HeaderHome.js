import React from 'react';
import logoFull from '../images/logoFull.svg';
import '../styles/HeaderHome.css';

const HeaderHome = () => {
  return (
    <header className='headerHome'>
      <img src={logoFull} alt='full logo' className='logo' />
      <h1>TROUVEZ UN FILM A REGARDER CE SOIR !</h1>
      <span className='borderBottom' />
    </header>
  );
};

export default HeaderHome;
