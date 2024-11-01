import { FaBook } from "react-icons/fa";

const Footer = () =>{
    return(
   
        <div className="footer-container">
            <div className="footer-up">
                <div className="footer-logo">
                    <h1><span>Libros</span>Jardin <i><FaBook/></i></h1>
                </div>
                <div className="footer-box">
                    <h2>Contactanos</h2>
                    <p>+55 555-555</p>
                    <p>librosjardin@gmail.com</p>
                </div>
                <div className="footer-box">
                    <h2>Links</h2>
                  <p>HOME</p>
                  <p>ACERCA</p>
                  <p>CONTACTO</p>
                </div>
            </div>
            <div className="footer-down">
                <p>derechos reservados | Hecho por: Genesis Sanchez</p>
            </div>
        </div>
 
    );
}
export default Footer;