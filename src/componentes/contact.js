
const Contact = () =>{
    return(
        <div className="contact-container">
            <img src="books3.jpg" alt="img" />
            <form>
                <input type="email" placeholder="Introduzca su email"/>
                <textarea placeholder="Dejanos un comentario"></textarea>
                <button>ENVIAR</button>
            </form>
        </div>
    );
}

export default Contact;