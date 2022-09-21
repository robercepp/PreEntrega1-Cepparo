import React from 'react';
import Categories from './Categories';
import SearchBar from './SearchBar';

/*CartWidget.jsx se encuentra dentro de SearchBar.jsx por razones de organización y prolijidad*/

const Navbar = () => {
return (
<>
    <nav className='navbar'>
        <div className='logo-container'>
            <a className='navbar-logo titles' href=''>Anabella Avena</a>
            <p className='subtitle titles'>ilustradora freelance</p>
        </div>
        <Categories/>
        <SearchBar busqueda="Buscar Productos" />
    </nav>

</>
);
}

export default Navbar;