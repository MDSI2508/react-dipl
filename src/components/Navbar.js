import React,{useState} from "react";
import {Link,NavLink} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

import Logo from'./../images/Logo.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);

        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };




    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src={Logo} width="50px" height="50px" />


                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}>

                    </i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            О нас
                        </NavLink>
                    </li>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <NavLink to='/house' className='nav-links' onClick={closeMobileMenu}>
                            Новости<i className='fas fa-caret-down'/>
                        </NavLink>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/saints' className='nav-links' onClick={closeMobileMenu}>
                            Святые
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/history' className='nav-links' onClick={closeMobileMenu}>
                            История
                        </NavLink>
                    </li>

                    <li className='nav-item'>
                        <NavLink to='/prayer' className='nav-links' onClick={closeMobileMenu}>
                            Просьба о молитве
                        </NavLink>
                    </li>
                    <li className='nav-item' >
                        <NavLink to='/soul' className='nav-links' onClick={closeMobileMenu}>
                            Душпастырство
                        </NavLink>

                    </li>
                </ul>
            </nav>

        </div>

    );

}
export default Navbar;