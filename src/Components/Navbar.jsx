import styles from './Navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useCreatCookie } from '../Hooks/useCreatCookie';
import { useArrayCookies } from '../Hooks/useArrayCookies';

const Navbar = () => {

  const lastSearches = useArrayCookies("ktone", "kttwo", "ktthr");
  const [versionApp, setVersionApp] = useState(true);
  const [validar, setValidar] = useState(false);
  const [produto, setProduto] = useState('');
  const [rec, setRec] = useState([]);
  let auto = useRef();
  
  const [showAgain, setShowAgain] = useState([]);

  const [vfCookie, setVfCookie]= useState(false);

  const [name, setName] = useState('');
  const navegate = useNavigate();

  useEffect(() => {
    function getCookie(name) {
      let cookie = {};
  
      document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
        cookie[k.trim()] = v;
      });
  
      return cookie[name];
    };
    const vf = getCookie("concordo");

    if (vf){
      setVfCookie(true);
    }
    
    function listHistoric(his) {
      let inverter = [];
      if (his[0] !== undefined && his[1] === undefined && his[2] === undefined) {
        inverter.push(his[0]);
      } else if (his[0] !== undefined && his[1] !== undefined && his[2] === undefined) {
        inverter[0] = his[1];
        inverter[1] = his[0];
      } else if (his[0] !== undefined && his[1] !== undefined && his[2] !== undefined) {
        inverter[0] = his[2];
        inverter[1] = his[1];
        inverter[2] = his[0];
      };
      
      setShowAgain(inverter);
    };
  
    listHistoric(lastSearches);
  }, [lastSearches]);
 
  const buscas = useMemo(() => {
    return [
      { id: 1, name: "Ps5"},
      { id: 2, name: "Ps4"},
      { id: 3, name: "Playstation 5"},
      { id: 4, name: "Playstation 4"},
      { id: 5, name: "Xbox One"},
      { id: 6, name: "Xbox One S"},
      { id: 7, name: "Xbox One X"},
      { id: 8, name: "Xbox Series S"},
      { id: 9, name: "Xbox Series X"},
      { id: 10, name: "Nintendo Switch"},
      { id: 11, name: "Nintendo Switch Lite"},
      { id: 12, name: "Nintendo Switch OLED"},
      { id: 13, name: "Controle Ps5"},
      { id: 14, name: "Controle Ps4"},
      { id: 15, name: "Controle Xbox One"},
      { id: 16, name: "Controle Xbox Series"},
      { id: 17, name: "Controle Nintendo Switch Joy-Con"},
      { id: 18, name: "Controle Nintendo Switch Pro"},
      { id: 19, name: "Gta Definitive Edition"},
      { id: 20, name: "Gta 5"},
      { id: 21, name: "Grand Theft Auto: The Trilogy"},
      { id: 22, name: "Grand Theft Auto 5"},
      { id: 23, name: "Samsung Galaxy S23"},
      { id: 24, name: "Samsung Galaxy S22"},
      { id: 25, name: "Samsung Galaxy S21"},
      { id: 26, name: "Samsung Galaxy S20"},
      { id: 27, name: "Samsung Galaxy Z Flip 4"},
      { id: 28, name: "Samsung Galaxy Z Flip 3"},
      { id: 29, name: "Samsung Galaxy A13"},
      { id: 30, name: "Samsung Galaxy A14"},
      { id: 31, name: "Samsung Galaxy A23"},
      { id: 32, name: "Samsung Galaxy A54"},
      { id: 33, name: "Samsung Galaxy A34"},
      { id: 34, name: "Samsung Galaxy M54"},
      { id: 35, name: "Samsung Galaxy M53"},
      { id: 36, name: "Samsung Galaxy M13"},
      { id: 37, name: "Motorola Moto g23"},
      { id: 38, name: "Motorola Moto g22"},
      { id: 39, name: "Motorola Moto g73"},
      { id: 40, name: "Motorola Moto g82"},
      { id: 41, name: "Motorola Moto e40"},
      { id: 42, name: "Motorola Moto e32"},
      { id: 43, name: "Motorola Moto e22"},
      { id: 44, name: "Motorola Moto e20"},
      { id: 45, name: "Motorola Moto Edge 30 Ultra"},
      { id: 46, name: "Motorola Moto Edge 30 Fusion"},
      { id: 47, name: "iPhone 14"},
      { id: 48, name: "iPhone 14 Pro"},
      { id: 49, name: "iPhone 14 Pro Max"},
      { id: 50, name: "iPhone 13"},
      { id: 51, name: "iPhone 13 mini"},
      { id: 52, name: "iPhone 13 Pro Max"},
      { id: 53, name: "iPhone 12"},
      { id: 54, name: "iPhone 12 mini"},
      { id: 55, name: "iPhone 12 Pro Max"},
      { id: 56, name: "iPhone 11"},
      { id: 57, name: "iPhone 11 Pro Max"},
      { id: 58, name: "iPhone SE 3"},
      { id: 59, name: "iPhone SE 2"},
      { id: 60, name: "iPhone XR"},
      { id: 61, name: "Huawei Nova 9"},
      { id: 62, name: "Huawei Nova 9 SE"},
      { id: 63, name: "Huwaei Nova 5T"},
      { id: 64, name: "Huawei Honor X8"},
      { id: 65, name: "Xiaomi Redmi Note 11"},
      { id: 66, name: "Xiaomi 12 Lite"},
      { id: 67, name: "Google Pixel 6"},
      { id: 68, name: "Samsung Galaxy Tab S8"},
      { id: 69, name: "Samsung Galaxy Tab A8"},
      { id: 70, name: "Samsung Galaxy Tab A7"},
      { id: 71, name: "Samsung Galaxy Tab S7 FE LTE"},
      { id: 72, name: "iPad Pro"},
      { id: 73, name: "iPad Air"},
      { id: 74, name: "iPad 10"},
      { id: 75, name: "iPad Mini"},
      { id: 76, name: "Furadeira"}, 
      { id: 77, name: "Liquidificador"},
      { id: 78, name: "Micro-ondas"},
      { id: 79, name: "Máquina de Lavar"},
      { id: 80, name: "Fritadeira Elétrica"},
      { id: 81, name: "Geladeira"},
      { id: 82, name: "Forno"},
      { id: 83, name: "Fogão"},
      { id: 84, name: "Fogão Cooktop"},
      { id: 85, name: "Batedeira"},
      { id: 86, name: "Tv 32"},
      { id: 87, name: "Tv 42"},
      { id: 88, name: "TV 50"},
      { id: 89, name: "Tv 55"},
      { id: 90, name: "Tv 60"},
      { id: 91, name: "Tv 4K"},
      { id: 92, name: "Mini System"},
      { id: 93, name: "Caixa de Som"},
      { id: 94, name: "Home Theater"},
      { id: 95, name: "Motosserra"},
      { id: 96, name: "Kit de Ferramentas"},
      { id: 97, name: "Cortador de Grama"},
      { id: 98, name: "Camiseta Masculina"},
      { id: 99, name: "Camiseta Feminina"},
      { id: 100, name: "Calça Masculina"},
      { id: 101, name: "Calça Feminina"},
      { id: 102, name: "Bermudas"},
      { id: 103, name: "Shorts"},
      { id: 104, name: "Moletom Masculino"},
      { id: 105, name: "Moletom Feminino"},
      { id: 106, name: "Tênis Masculino"},
      { id: 107, name: "Tênis Feminino"},
      { id: 108, name: "Macbook Pro"},
      { id: 109, name: "Macbook Air"},
      { id: 110, name: "Macbook 12"}
    ];
  },[]); 

  const handleSo = () => {
    let windowWidth = window.innerWidth;

    if (windowWidth > 992) {
      setVersionApp(false);
    } else {
      setVersionApp(true);
    };

    setValidar(true);
  };

  const handleProduct = (e) => {
    setProduto(e.target.value);
  };

  useEffect(() => {
    if (produto.length >= 3) {
      const lowerProduto = produto.toLowerCase();

      let listaDasRec = buscas.filter((ite) => {  
        let listandoProdutos = ite.name.toLowerCase().includes(lowerProduto);
        return listandoProdutos;
      });

      setRec(listaDasRec);
    };
  }, [produto, buscas]);

  function listSuggestions(rec) {
    let subtracao = rec.length - 4;
    return rec.splice(rec.length - subtracao);
  };

  listSuggestions(rec);

  useEffect(() => {
    function handleClick(e) {
      if (produto.length >= 3 && validar && !(auto.current.contains(e.target))) {
        setValidar(false);
      };
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (produto !== '') {
      setValidar(false);
      showAgain.pop();
      setShowAgain([produto, ...showAgain]);
      setName(produto);
      convertWord(produto);  
    };

    function convertWord(prod) {
      let plusWord = prod.replace(/\s/g, "+");
      navegate("/search?q=" + plusWord);
    };
  };

  const handleSearch = () => {
    if (produto !== '') {
      setValidar(false);
      setName(produto);
      convertWord(produto);  
    };

    function convertWord(prod) {
      let plusWord = prod.replace(/\s/g, "+");
      navegate("/search?q=" + plusWord);
    };
  };

  function handleCom(value) {
    // console.log('acessou...')
    setValidar(false);
    setProduto(value.target.innerText);

    showAgain.pop();
    setShowAgain([value.target.innerText, ...showAgain]);

    let prod = value.target.innerText;

    let miniProd = prod.toLowerCase();

    let plusWord = miniProd.replace(/\s/g, "+");

    navegate("/search?q=" + plusWord);
    setName(value.target.innerText);
  };

  // console.log("rec.length", rec.length);

  // console.log(validar && rec > 0);

  // console.log("validar && rec.length === 0 && showAgain.length > 0: ", validar && rec.length === 0 && showAgain.length > 0)

  // console.log("validar && rec.length > 0 && showAgain.length === 0: ", validar && rec.length > 0 && showAgain.length === 0)

  // console.log("validar && rec.length > 0 && showAgain.length > 0: ", validar && rec.length > 0 && showAgain.length > 0)

  useCreatCookie(name);  

  return (
    <header id='nav_container'>
      <div className={styles.container_space_mobile}>
        <div className={styles.space_nav_mobile}>
          <NavLink to="/" className={styles.brand_box}>
            <h1 className={styles.brand}>BUSK!Á</h1>
          </NavLink>
          <div className={styles.nav_links}>
            <NavLink className={styles.links_a_time} to="/historic">
              <i className="gg-time"></i>
              Histórico
            </NavLink>
            <NavLink className={styles.links_a_bell} to="/alert">
              <i className="gg-bell"></i>
              Alertas
            </NavLink>
          </div>
        </div>
        <div className={styles.space_form}>
          <form
            className={styles.form_s_mobile}
            onSubmit={handleSubmit}
          >
            <div className={styles.form_input}>
              <input
                type="text"
                placeholder="Digite aqui para pesquisar"
                name="Campo de busca"
                autoComplete="off"
                value={produto}
                onChange={handleProduct}
                onClick={handleSo}
              />
            </div>
            <button
              className={styles.search_logo_box}
              onMouseDown={handleSearch}
              type="submit"
              name="Pesquisar"
              aria-label="Pesquisar"
            >
              <i className="gg-search"></i>
            </button>
          </form>
          {produto.length >= 3 && !validar && versionApp &&
            <div className={styles.space_render} ref={auto}>
              <div className={styles.autocomplete_space}>
                {rec.map((value) => (
                  <div
                    key={value.id}
                    className={styles.autocomplete_box}
                    onClick={handleCom}
                    type="button"
                  >
                    <p>{value.name}</p>
                  </div>
                ))}
                {vfCookie && produto.length >= 3 && rec !== 0 && showAgain.length > 1 &&
                  <div className={showAgain.length > 2 ? styles.lastsearches_space : styles.lastsearches_spacedupla}>
                    <div className={styles.lastsearches_box}>
                      <span>Buscas Recentes</span>
                      <ul className={showAgain.length > 2 ? styles.lastsearches_ul : styles.lastsearches_uldupla}>
                        {showAgain.map((item, i) => (
                          <li key={i}
                            onClick={handleCom}
                          >
                            <i className="gg-time"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
      <div className={styles.container_space_desk}>
        <div className={styles.space_nav_desk}>
          <NavLink to="/" className={styles.brand_box}>
            <h1 className={styles.brand}>BUSK!Á</h1>
          </NavLink>
        </div>
        <div className={styles.space_form}>
          <form
            className={styles.form_s_desk}
            onSubmit={handleSubmit}
          >
            <div className={styles.form_input}>
              <input
                type="text"
                placeholder="Digite aqui para pesquisar"
                name="Campo de busca"
                autoComplete="off"
                value={produto}
                onChange={handleProduct}
                onClick={handleSo}
              />
            </div>
            <button
              className={styles.search_logo_box}
              onMouseDown={handleSearch}
              type="submit"
              name="Pesquisar"
              aria-label="Pesquisar"
            >
              <i className="gg-search"></i>
            </button>
          </form>
          {produto.length >= 3 && validar && !versionApp &&
            <div className={styles.space_render} ref={auto}>
              <div className={styles.autocomplete_space}>
                {/* {validar && rec.length > 0 && showAgain.length === 0 && <hr />}
                {validar && rec.length > 0 && showAgain.length > 0 && <hr />}
                {validar && rec.length === 0 && showAgain.length > 0 && <hr />} */}
                {rec.map((value) => (
                  <div
                    key={value.id}
                    className={styles.autocomplete_box}
                    onClick={handleCom}
                    type="button"
                  >
                    <p>{value.name}</p>
                  </div>
                ))}
                {vfCookie && produto.length >= 3 && rec !== 0 && showAgain.length > 1 &&
                  <div className={showAgain.length > 2 ? styles.lastsearches_space : styles.lastsearches_spacedupla}>
                    <div className={styles.lastsearches_box}>
                      <span>Buscas Recentes</span>
                      <ul className={showAgain.length > 2 ? styles.lastsearches_ul : styles.lastsearches_uldupla}>
                        {showAgain.map((item, i) => (
                          <li key={i}
                            onClick={handleCom}
                          >
                            <i className="gg-time"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
        <div className={styles.nav_links}>
          <NavLink className={styles.links_a_time} to="/historic">
            <i className="gg-time"></i>
            Histórico
          </NavLink>
          <NavLink className={styles.links_a_bell} to="/alert">
            <i className="gg-bell"></i>
            Alertas
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;