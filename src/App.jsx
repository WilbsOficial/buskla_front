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
import Historic from "./pages/Historic/Historic";
import Alert from "./pages/Alert/Alert";
import Product from "./pages/Product/Product";
import api from "./Services/api";

// import Testes from "./pages/Testes";

function App() {

  const [validCookie, setValidCookies] = useState(true);

  useEffect(() => { 
    if (document.cookie.indexOf("lastAlert") > 0) {
      // console.log('entrou no buscando...')

      function getCookie(name) {
        let cookie = {};
        document.cookie.split(';').forEach(function (el) {
          let [k, v] = el.split('=');
          cookie[k.trim()] = v;
        });

        return cookie[name];
      };
      const myCookieName = getCookie("lastAlert");

      const forNumCookie = parseInt(myCookieName);

      let timeNumber = forNumCookie + 1;

      let cookiesList = [];

      for (let i = 1; i < timeNumber; i++) {
        if (document.cookie.indexOf(`alert${i}`) > 0) {
          function getCookie(name) {
            let cookie = {};
            document.cookie.split(';').forEach(function (el) {
              let [k, v] = el.split('=');
              cookie[k.trim()] = v;
            });

            return cookie[name];
          };
          const cookieName = getCookie(`alert${i}`);

          if (cookieName) {
            let toArrayCookie = cookieName.split(" ");

            let importantItems = [];

            importantItems.push(toArrayCookie[toArrayCookie.length - 1])

            importantItems.push(toArrayCookie[toArrayCookie.length - 2])

            toArrayCookie.pop()

            toArrayCookie.pop()

            const justName = toArrayCookie.join().replaceAll(",", " ");

            let becomeObj = {
              id: parseInt(importantItems[1]),
              word: justName,
              valuation: importantItems[0]
            };

            cookiesList.push(becomeObj);
          };
        };
      };

      async function arrAlert(valuesOfCookie) {
        await api.post("/alerta", {
          theAlertlist: valuesOfCookie
        })
          .then((res) => {
            let getTheAlertlist = res.data;

            if (getTheAlertlist) {
              let theOn = [];

              for (let objA of cookiesList) {
                getTheAlertlist.some((objB) => {
                  if (objB.num === objA.id) {

                    objA.linkId = objB.caseId;

                    theOn.push(objA);

                    let index = cookiesList.indexOf(objA);

                    cookiesList.splice(index, 1);
                  };
                });
              };

              if (theOn.length > 0) {
                 alert("Aviso de alerta de preço finalizado, acesse seus alertas para conferir.");
              };
            };
          })
          .catch((error) => {
            console.log(error);
          });
      };

      arrAlert(cookiesList);
    };

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
            <Route path="/historic" element={<Historic />} /> 
            <Route path="/alert" element={<Alert />} /> 
            <Route path="/categories/:id" element={<Categories />} />
            <Route path="/cookies" element={<Dados />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/uso" element={<Uso />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/product/:id" element={<Product />} />
            {/* <Route path="/testes" element={<Testes />} /> */}
          </Routes>
        </div>
        {!validCookie && <Cookies />}
      </BrowserRouter>
  );
};

export default App;