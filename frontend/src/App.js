import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import ScrollToTop from "./components/header/scrollToTop";


const App = () => {
    return ( 
       <div className="App">
        <Router>
        <ScrollToTop/>
          <Header/>
            <AnimatedRoutes/>
            <a
        href="https://wa.me/971566895477"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      {/* <div class="elfsight-app-74f39041-1a69-49c8-87e6-b006d07ce87e"></div> */}
          <Footer/>
          {/* WhatsApp icon */}
      
        </Router>
       </div>
    );
};


export default App;