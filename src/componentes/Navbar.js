import { useRef } from "react";
import { FaBars, FaTimes, FaBook } from "react-icons/fa";

function Navbar() {
    const navref = useRef();

    const showNavbar = () => {
        navref.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
              <div className="Navbar-logo">
                    <h1><span>Libros</span>Jardin <i><FaBook/></i></h1>
                </div>
            <nav ref={navref}>  
                <a href="/#">INICIO</a>
                <a href="/#">ACERCA</a>
                <a href="/#">SERVICIOS</a>
                <a href="/#">CONTACTO</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
            </button>
            <div className="login">Login<i><FaBook/></i></div>
        </header>
    );
}

export default Navbar;