
import './App.css';
import Home from "./componentes/Home";
import Navbar from "./componentes/Navbar";
import Topic from "./componentes/topics";
import About from "./componentes/About";
import Option from "./componentes/options";
import Contact from "./componentes/contact";
import Footer from "./componentes/footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home />
       <Topic />
       <About />
       <Option />
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
