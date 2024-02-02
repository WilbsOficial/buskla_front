import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cookies from "./Components/Cookies";
import Home from "./pages/Home/Home"; 
import Search from "./pages/Search/Search"; 
import Sobre from "./pages/Conditions/Sobre";
import Privacidade from "./pages/Conditions/Privacidade";
import Uso from "./pages/Conditions/Uso";
import Dados from "./pages/Conditions/Dados";
import Categories from "./pages/Categories/Categories";
// import Historic from "./pages/Historic/Historic";
// import Alert from "./pages/Alert/Alert";
// import Product from "./pages/Product/Product";
// import Testes from "./pages/Testes";

function App() {

  const [validCookie, setValidCookies] = useState(true);

  useEffect(() => { 
    const timer = setTimeout(() => {
      function getCookie(name) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });

        return cookie[name];
      };
      const myCookie = getCookie("concordo")

      if (myCookie === undefined) {
        setValidCookies(false)
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            {/* <Route path="/historic" element={<Historic />} /> */}
            {/* <Route path="/alert" element={<Alert />} /> */}
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="/cookies" element={<Dados />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/uso" element={<Uso />} />
            <Route path="/sobre" element={<Sobre />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            {/* <Route path="/testes" element={<Testes />} /> */}
          </Routes>
        </div>
        {!validCookie && <Cookies />}
      </BrowserRouter>
  );
};

export default App;