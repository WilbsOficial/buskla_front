import styles from './Search.module.css'; 
import {useState, useEffect, useMemo} from 'react';
import {useBuskla} from "../../Hooks/useBuskla";
import {useSearchParams, Link} from "react-router-dom";
import FooterGoUp from "../../Components/FooterGoUp";
import CardList from "../../Components/CardList";
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import notFoundIcone from '../../assets/Fail-200px.svg';

const Search = () => { 

  const [searchParams] = useSearchParams(""); 
  const [palavra, setPalavra] = useState("");
  const [loadingIs, setLoadingIs] = useState(true);
  const [showFix, setShowFix] = useState(false); 
  const [notFound, setNotFound] = useState(false);
  const [pcategory, setPcategory] = useState("");
  const [categoryWord, setCategoryWord] = useState("");
  const [categoryLinkFix, setCategoryLinkFix] = useState("");
  const [faTitle, setFaTitle] = useState("");
  const [fbTitle, setFbTitle] = useState(""); 
  const [fcTitle, setFcTitle] = useState("");
  const [fa, setFa] = useState([]);
  const [fb, setFb] = useState([]);
  const [fc, setFc] = useState([]);
  const [filtExist, setFiltExist] = useState(true);
  const [novoAnuncio, setNovoAnuncio] = useState([]);
  const [selectedA, setSelectedA] = useState("");
  const [selectedB, setSelectedB] = useState("");
  const [selectedC, setSelectedC] = useState("");
  const [groupStores, setGroupStores] = useState([]);
  const [viewMe, setViewMe] = useState(true);
  const [hideSome, setHideSome] = useState(false);
  const [filt, setFilt] = useState(false);
  const seta = ">";

  useEffect(() => {
    let getPlusWord = searchParams.get('q');
    let spaceWord = getPlusWord.replace(/\u002b/g, "\u0020");
    setPalavra(spaceWord);
  }, [searchParams]);
 
  const anuncio = useBuskla(palavra);

  useEffect(() => {
    if (anuncio.length > 0) {
      setLoadingIs(false);
      setShowFix(true);
      setNotFound(false);
      setPcategory(anuncio[0].category);
    } 

    if (anuncio.length === 0) {
      setShowFix(false);
      setNotFound(false);
      setLoadingIs(true);
    }     

    if (!anuncio) {
      setLoadingIs(false);
      setNotFound(true);
    }
  }, [anuncio])

  useEffect(() => {
    function CreateWordCategory(ctName) {
      if (ctName === "a") {
        setCategoryLinkFix("Celulares e tablets");
        setCategoryWord("celulares+e+tabletes");
      } else if (ctName === "b") {
        setCategoryLinkFix("Computadores");
        setCategoryWord("computadores");
      } else if (ctName === "c") {
        setCategoryLinkFix("Video game");
        setCategoryWord("video+games");
      } else if (ctName === "d") {
        setCategoryLinkFix("Jogos eletrônicos");
        setCategoryWord("jogos+eletronicos");
      } else if (ctName === "e") {
        setCategoryLinkFix("Eletrodomésticos");
        setCategoryWord("eletrodomesticos");
      } else if (ctName === "f") {
        setCategoryLinkFix("Tv e áudio");
        setCategoryWord("tv+e+audio");
      } else if (ctName === "g") {
        setCategoryLinkFix("Casa e limpeza");
        setCategoryWord("casa+e+limpeza");
      } else if (ctName === "h") {
        setCategoryLinkFix("Livros");
        setCategoryWord("livros");
      } else if (ctName === "i") {
        setCategoryLinkFix("Eletrônicos em geral");
        setCategoryWord("eletronicos+em+geral");
      } else if (ctName === "j") {
        setCategoryLinkFix("Construção e ferramentas");
        setCategoryWord("construcao+e+ferramentas");
      } else if (ctName === "k") {
        setCategoryLinkFix("Roupas");
        setCategoryWord("roupas");
      } else if (ctName === "l") {
        setCategoryLinkFix("Produtos de beleza");
        setCategoryWord("produtos+de+beleza");
      }
    }; 
    CreateWordCategory(pcategory);
  }, [pcategory]);
  
  useEffect(() => {
    const optionsToChoose = [
      "Armazenamento",
      "Memória ram",
      "Processador",
      "Modelo",
      "Plataforma",
      "Voltagem",
      "Tamanho"
    ];

    const c1Storage = [
      {name: "32 GB"},
      {name: "64 GB"},
      {name: "128 GB"},
      {name: "256 GB"},
      {name: "512 GB"}                                                                                                                                                                   
    ];
    const c1Ram = [
      {name: "4 GB"},
      {name: "6 GB"},
      {name: "8 GB"},
      {name: "12 GB"}                                                                                                                                                                    
    ];

    const c2Storage = [
      {name: "128 GB"},
      {name: "256 GB"},
      {name: "500 GB"},
      {name: "1 TB"},
      {name: "2 TB"}                                                                                                                                                                   
    ];
    const c2Ram = [
      {name: "4 GB"},
      {name: "8 GB"},
      {name: "16 GB"},
      {name: "32 GB"},
      {name: "64 GB"}                                                                                                                                                                  
    ];
    const c2Processor = [
      {name: "Intel i3"},
      {name: "Intel i5"},
      {name: "Intel i7"},
      {name: "Intel i9"},
      {name: "AMD Ryzen 3"},   
      {name: "AMD Ryzen 5"},
      {name: "AMD Ryzen 7"},
      {name: "AMD Ryzen 9"}                                                                                                                                                         
    ];

    const c3ModelPs4 = [
      {name: "Ps4 Fat"},
      {name: "Ps4 Slim"},
      {name: "Ps4 Pro"}                                                                                                                                                         
    ];
    const c3ModelXboxOne = [
      {name: "Xbox One Fat"},
      {name: "Xbox One S"},
      {name: "Xbox One X"}                                                                                                                                                         
    ];
    const c3ModelXboxSeres = [
      {name: "Xbox Series S"},
      {name: "Xbox Series X"}                                                                                                                                                         
    ];
    const c3ModelPs5 = [
      {name: "Ps5 Edição Com Leitor"},    
      {name: "Ps5 Edição Digital"}                                                                                                                                                     
    ];
    const c3ModelNintendoSw = [
      {name: "Nintendo Switch"},
      {name: "Nintendo Switch Lite"},
      {name: "Nintendo Switch OLED"}                                                                                                                                                         
    ];
    const c3StorageNintendoSw = [
      {name: "32 GB"},
      {name: "64 GB"}                                                                                                                                                     
    ];
    const c3StoragePs4Xbox = [
      {name: "500 GB"},
      {name: "1 TB"}                                                                                                                                                      
    ];

    const c4platform = [
      {name: "Nintendo Switch"},
      {name: "Xbox Series"},
      {name: "Playstation 4"},
      {name: "Playstation 5"}                                                                                                                                                      
    ];

    const c5c10Voltage = [
      {name: "110 Volts"},
      {name: "220 Volts"},
    ];

    const c6Size = [
      {name: "32″"},
      {name: "40″"},
      {name: "43″"},
      {name: "50″"},
      {name: "55″"},
      {name: "60″"}
    ];

    if (anuncio.length > 0) {
      if (pcategory === "a") {
        setFaTitle(optionsToChoose[0]);
        setFa(c1Storage);
        setFbTitle(optionsToChoose[1]);
        setFb(c1Ram);
        setFc([]);
      } else if (pcategory === "b") {
        setFaTitle(optionsToChoose[0]);
        setFa(c2Storage);
        setFbTitle(optionsToChoose[1]);
        setFb(c2Ram);
        setFcTitle(optionsToChoose[2]);
        setFc(c2Processor);
      } else if (pcategory === "c") {
        if (anuncio[0].filtC === "Ps4") {
          setFaTitle(optionsToChoose[3]);
          setFa(c3ModelPs4);
          setFbTitle(optionsToChoose[0]);
          setFb(c3StoragePs4Xbox);
          setFc([]);
        } else if (anuncio[0].filtC === "XO") {
          setFaTitle(optionsToChoose[3]);
          setFa(c3ModelXboxOne);
          setFbTitle(optionsToChoose[0]);
          setFb(c3StoragePs4Xbox);
          setFc([]);
        } else if (anuncio[0].filtC === "XS") {
          setFaTitle(optionsToChoose[3]);
          setFa(c3ModelXboxSeres);
          setFb([]);
          setFc([]);
        } else if (anuncio[0].filtC === "Ps5") {
          setFaTitle(optionsToChoose[3]);
          setFa(c3ModelPs5);
          setFb([]);
          setFc([]);
        } else if (anuncio[0].filtC === "NS") {
          setFaTitle(optionsToChoose[3]);
          setFa(c3ModelNintendoSw);
          setFbTitle(optionsToChoose[0]);
          setFb(c3StorageNintendoSw);
          setFc([]);
        } 
      } else if (pcategory === "d") {
        setFaTitle(optionsToChoose[4]);
        setFa(c4platform);
        setFb([]);
        setFc([]);
      } else if (pcategory === "e" || pcategory === "j") {
        setFaTitle(optionsToChoose[5]);
        setFa(c5c10Voltage);
        setFb([]);
        setFc([]);
      } else if (pcategory === "f") {
        setFaTitle(optionsToChoose[6]);
        setFa(c6Size);
        setFb([]);
        setFc([]);
      } else if (pcategory === "g") {
        setFa([]);
        setFb([]);
        setFc([]);
      } else if (pcategory === "h") {
        setFa([]);
        setFb([]);
        setFc([]);
      } else if (pcategory === "i") {
        setFa([]);
        setFb([]);
        setFc([]);
      } else if (pcategory === "k") {
        setFa([]);
        setFb([]);
        setFc([]);
      } else if (pcategory === "l") {
        setFa([]);
        setFb([]);
        setFc([]);
      }
    } 
  }, [pcategory, anuncio]); 

  const stores = useMemo(() => {
    const lisOfStores = [
      {name: "Amazon"},
      {name: "Casas Bahia"},
      {name: "Colombo"},
      {name: "C&A"},
      {name: "Dafiti"},
      {name: "Extra"},
      {name: "Fast Shop"},
      {name: "iPlace"},
      {name: "KaBuM!"},
      {name: "Lebes"},
      {name: "Leroy Merlin"},
      {name: "Lojas Becker"},
      {name: "Lojas Renner"},
      {name: "Magazine Luiza"},
      {name: "Marisa"},
      {name: "Mercado Livre"},
      {name: "Pichau"},
      {name: "Ponto"},
      {name: "Quero-Quero"},
      {name: "Riachuelo"},
      {name: "Saraiva"},
      {name: "Shopee"},
      {name: "Shoptime"},
      {name: "Submarino"},
      {name: "TaQi"},
      {name: "TerabyteShop"},
      {name: "Tumelero"}                                                                                                                                                                      
    ];
    return lisOfStores;
  }, []);

  const [checkedState, setCheckedState] = useState(
    new Array(stores.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const handleOnChangeOptionsA = (e) => {
    if (e === selectedA) {
      setSelectedA("");
      setFiltExist(true);
    } else {
      setSelectedA(e);
    } 
  }

  const handleOnChangeOptionsB = (e) => {
    if (e === selectedB) {
      setSelectedB("");
      setFiltExist(true);
    } else {
      setSelectedB(e);
    }
  }

  const handleOnChangeOptionsC = (e) => {
    if (e === selectedC) {
      setSelectedC("");
      setFiltExist(true);
    } else {
      setSelectedC(e);      
    }
  }

  useEffect(() => {
    if ((checkedState !== undefined) && (checkedState !== null)) {

      let indexList = [];

      for (var i=0; i < 27; ++i) {

        let valueI = checkedState[i];

        if (valueI) {
          indexList.push(i);
        };
      };

      const getGroupOfStores = filterForStore(indexList);

      if (getGroupOfStores.length !== 0) {
        setFiltExist(true);
        setGroupStores(getGroupOfStores);
      } else {
        if (indexList.length > 0) {
          setFiltExist(false);
        } else {
          setFiltExist(true);
        }
      };
    };

    function filterForStore(inList) {
      if (inList.length !== 0) {
        const contructList = [];

        for (var k=0; k < inList.length; ++k) {
          contructList.push(stores[inList[k]])
        }

        let groupOfStores = [];

        if (contructList.length !== 0) {
          for (var n=0; n < contructList.length; n++) {
            const justStores = justYourStores(n);

            function justYourStores(ini) {
              let algo = anuncio.filter((item) => {
                if (item.store === contructList[ini].name) {
                  return item;
                } else {
                  return null;
                }; 
              });
              
              return algo;
            };
            
            for (var m=0; m < justStores.length; ++m) {
              groupOfStores.push(justStores[m])
            };
          };
        };

        return groupOfStores;
      } else {
        setGroupStores([]);
        setNovoAnuncio([]);

        if ((selectedA !== "") || (selectedB !== "") || (selectedC !== "")) {
          setFiltExist(true);
        }
        return [];
      }
    };
  }, [checkedState, anuncio, stores, selectedA, selectedB, selectedC]);  

 useEffect(() => {  
      if (groupStores.length !== 0) {
        if ((selectedA !== "") && (selectedB !== "") && (selectedC !== "")) {

          let addOptionsToStores = groupStores.filter((ite) => {
            if ((ite.filtA === selectedA) && (ite.filtB === selectedB) && (ite.filtC === selectedC)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);

        } else if ((selectedA !== "") && (selectedB !== "")) {

          let addOptionsToStores = groupStores.filter((ite) => {
            if ((ite.filtA === selectedA) && (ite.filtB === selectedB)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);
            
        } else if ((selectedA !== "") && (selectedC !== "")) {

          let addOptionsToStores = groupStores.filter((ite) => {
            if ((ite.filtA === selectedA) && (ite.filtC === selectedC)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);

        } else if ((selectedB !== "") && (selectedC !== "")) {

          let addOptionsToStores = groupStores.filter((ite) => {
            if ((ite.filtB === selectedB) && (ite.filtC === selectedC)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);

        } else if (selectedA !== "") {

          let addOptionsToStores = groupStores.filter((ite) => {
            if (ite.filtA === selectedA) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);

        } else if (selectedB !== "") {

          let addOptionsToStores = groupStores.filter((ite) => {
            if (ite.filtB === selectedB) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);
          
        } else if (selectedC !== "") {

          let addOptionsToStores = groupStores.filter((ite) => {
            if (ite.filtC === selectedC) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistStore(addOptionsToStores);

        } else {
          setNovoAnuncio(groupStores);
        };
      } else {
        if ((selectedA !== "") && (selectedB !== "") && (selectedC !== "")) {

          let filterAddOptions = anuncio.filter((ite) => {
            if ((ite.filtA === selectedA) && (ite.filtB === selectedB) && (ite.filtC === selectedC)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);

        } else if ((selectedA !== "") && (selectedB !== "")) {

          let filterAddOptions = anuncio.filter((ite) => {
            if ((ite.filtA === selectedA) && (ite.filtB === selectedB)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);
            
        } else if ((selectedA !== "") && (selectedC !== "")) {

          let filterAddOptions = anuncio.filter((ite) => {
            if ((ite.filtA === selectedA) && (ite.filtC === selectedC)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);

        } else if ((selectedB !== "") && (selectedC !== "")) {

          let filterAddOptions = anuncio.filter((ite) => {
            if ((ite.filtB === selectedB) && (ite.filtC === selectedC)) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);

        } else if (selectedA !== "") {

          let filterAddOptions = anuncio.filter((ite) => {
            if (ite.filtA === selectedA) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);

        } else if (selectedB !== "") {

          let filterAddOptions = anuncio.filter((ite) => {
            if (ite.filtB === selectedB) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);
          
        } else if (selectedC !== "") {

          let filterAddOptions = anuncio.filter((ite) => {
            if (ite.filtC === selectedC) {
              return ite;
            } else {
              return null;
            }
          });
          activeFiltExistOptions(filterAddOptions);

        } else {
          setNovoAnuncio([]);
        }
      };

      function activeFiltExistOptions(AddOptions) {
        if (AddOptions.length === 0) {
          setFiltExist(false)
        } else {
          if (filtExist) {
            setNovoAnuncio(AddOptions);
          }
        }
      }

      function activeFiltExistStore(addStores) {
        if (addStores.length === 0) {
          setFiltExist(false)
        } else {
          if (filtExist) {
            setNovoAnuncio(addStores);
          }
        }
      }
 }, [anuncio, groupStores, selectedA, selectedB, selectedC, filtExist]);

  const handleCollapseSt = () => {
    setViewMe(false);
    setHideSome(true);
  };

  const handleHideSt = () => {
    setViewMe(true);
    setHideSome(false);
  };

  const handleAddFilter = () => {
    setFilt(true);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; 
  }; 

  const handleLessFilter = () => {
    setFilt(false);
    setViewMe(true);
    setHideSome(false);
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
  }

  return (
    <>
      {loadingIs &&
        <figure className={styles.modal_search_loading}>
          <img src={loadingIcone} alt="Carregando..." />
        </figure>}
      {notFound &&
        <main className={styles.modal_notFound}>
          <section className={styles.notFound_contente}>
            <figure className={styles.contente_svg}>
              <img src={notFoundIcone} alt="ícone simbolizando algo não encontrado" />
            </figure>
            <header className={styles.contente_big_message}>
              <h2>Ops! Sentimos muito.</h2>
            </header>
            <div className={styles.contente_small_message}>
              <span>Nenhum resultado para a sua busca foi encontrado</span>
            </div>
          </section>
        </main>}
      {anuncio && showFix &&
        <main className={styles.container_search}>
          {filt &&
            <div
              className={styles.search_filter_mobile_bc}
              onClick={handleLessFilter}
            >
            </div>
          }
          {filt &&
            <aside className={styles.area_box_filter}>
              <div className={styles.box_filter_mobile}>
                <section className={styles.filter_top}>
                  <header className={styles.filter_top_local_name}>
                    <h2>Filtros</h2>
                  </header>
                  <div className={styles.filter_top_bread_crumbs}>
                    <div className={styles.bread_crumbs_sw}>
                      <p>{palavra}</p>
                    </div>
                    <div className={styles.bread_crumbs_wc}>
                      <Link
                        to={`/categories/${categoryWord}`}
                        className={styles.wc_link}
                      >{categoryLinkFix} {seta}</Link>
                    </div>
                  </div>
                </section>
                {(fa.length > 0) && <section className={styles.filter_middle}>
                  <span>{faTitle}</span>
                  <ul className={styles.middle_ul_options}>
                    {fa.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.option_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                onChange={() => handleOnChangeOptionsA(name)}
                                checked={selectedA === name}
                              />
                              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>}
                {(fb.length > 0) && <section className={styles.filter_middle}>
                  <span>{fbTitle}</span>
                  <ul className={styles.middle_ul_options}>
                    {fb.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.option_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                onChange={() => handleOnChangeOptionsB(name)}
                                checked={selectedB === name}
                              />
                              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>}
                {(fc.length > 0) && <section className={styles.filter_middle}>
                  <span>{fcTitle}</span>
                  <ul className={styles.middle_ul_options}>
                    {fc.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.option_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                onChange={() => handleOnChangeOptionsC(name)}
                                checked={selectedC === name}
                              />
                              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>}
                <section
                  className={styles.filter_bottom}
                  style={!viewMe ? { height: "95.5em" } : null}
                >
                  <span>Lojas</span>
                  <ul
                    className={styles.filter_bottom_stores}
                    style={viewMe ? { height: "5.5em", overflow: "hidden" } : null}
                  >
                    {stores.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.store_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                checked={checkedState[index]}
                                onChange={() => handleOnChange(index)}
                              />
                              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  {!hideSome && <button onClick={handleCollapseSt}>Mostrar mais...</button>}
                  {hideSome && <button onClick={handleHideSt}>Subir</button>}
                </section>
              </div>
            </aside>
          }
          <div className={styles.filter_hb_btn}>
            <button onClick={handleAddFilter}>
              Adicionar filtros
              {!filt && <i className="gg-math-plus" name="ícone do símbolo mais, simbolizando adicionar"></i>}
            </button>
          </div>
          <section className={styles.search_contente}>
            <aside className={styles.box_filter}>
              <section className={styles.filter_top}>
                <header className={styles.filter_top_local_name}>
                  <h2>Filtros</h2>
                </header>
                <div className={styles.filter_top_bread_crumbs}>
                  <div className={styles.bread_crumbs_sw}>
                    <p>{palavra}</p>
                  </div>
                  <div className={styles.bread_crumbs_wc}>
                    <Link
                      to={`/categories/${categoryWord}`}
                      className={styles.wc_link}
                    >{categoryLinkFix} {seta}</Link>
                  </div>
                </div>
              </section>
              {(fa.length > 0) &&
                <section className={styles.filter_middle}>
                  <span>{faTitle}</span>
                  <ul className={styles.middle_ul_options}>
                    {fa.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.option_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-a-${index}`}
                                name={name}
                                value={name}
                                onChange={() => handleOnChangeOptionsA(name)}
                                checked={selectedA === name}
                              />
                              <label htmlFor={`custom-checkbox-a-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>}
              {(fb.length > 0) &&
                <section className={styles.filter_middle}>
                  <span>{fbTitle}</span>
                  <ul className={styles.middle_ul_options}>
                    {fb.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.option_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-b-${index}`}
                                name={name}
                                value={name}
                                onChange={() => handleOnChangeOptionsB(name)}
                                checked={selectedB === name}
                              />
                              <label htmlFor={`custom-checkbox-b-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>}
              {(fc.length > 0) &&
                <section className={styles.filter_middle}>
                  <span>{fcTitle}</span>
                  <ul className={styles.middle_ul_options}>
                    {fc.map(({ name }, index) => {
                      return (
                        <li key={index}>
                          <div className="toppings-list-item">
                            <div className={styles.option_area}>
                              <input
                                type="checkbox"
                                id={`custom-checkbox-c-${index}`}
                                name={name}
                                value={name}
                                onChange={() => handleOnChangeOptionsC(name)}
                                checked={selectedC === name}
                              />
                              <label htmlFor={`custom-checkbox-c-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              }
              <section
                className={styles.filter_bottom}
                style={!viewMe ? { height: "53.5em" } : null}
              >
                <span>Lojas</span>
                <ul
                  className={styles.filter_bottom_stores}
                  style={viewMe ? { height: "5.5em", overflow: "hidden" } : null}
                >
                  {stores.map(({ name }, index) => {
                    return (
                      <li key={index}>
                        <div className="toppings-list-item">
                          <div className={styles.store_area}>
                            <input
                              type="checkbox"
                              id={`custom-checkbox-d-${index}`}
                              name={name}
                              value={name}
                              checked={checkedState[index]}
                              onChange={() => handleOnChange(index)}
                            />
                            <label htmlFor={`custom-checkbox-d-${index}`}>{name}</label>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {!hideSome && <button onClick={handleCollapseSt}>Mostrar mais...</button>}
                {hideSome && <button onClick={handleHideSt}>Subir</button>}
              </section>
            </aside>
            <section className={styles.box_cardlist}>
              {(novoAnuncio.length <= 0) && filtExist && anuncio.map((data) => (
                <CardList
                  key={data._id}
                  item={data}
                />
              ))}
              {(novoAnuncio.length > 0) && filtExist && novoAnuncio.map((data) => (
                <CardList
                  key={data._id}
                  item={data}
                />
              ))}
              {novoAnuncio.length >= 0 && !filtExist && 
                <p className={styles.no_results}>
                  Ops! Nem um resultado encontrado.
                </p>
              }
            </section>
          </section>
          {(anuncio.length > 3) && filtExist && (novoAnuncio.length <= 0) &&
            <FooterGoUp hseta={filt} />
          }
        </main>}
    </>
  );
};

export default Search;