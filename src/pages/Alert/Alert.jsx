import styles from "./Alert.module.css";
import { useEffect, useState } from "react";
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import bell from '../../assets/siren-1-1s-200px.svg'; 
import AlertNameDome from "../../Components/AlertNameDome";
import AlertName from "../../Components/AlertName";
import FooterGoUp from "../../Components/FooterGoUp";
import api from "../../Services/api";

{/* <i class="gg-edit-markup"></i> */}

const Alert = () => {
  
    const [loadingIs, setLoadingIs] = useState(true);
    const [problemAlert, setProblemAlert] = useState(0);
    // const [getTheAlertlist, setGetTheAlertlist] = useState([]);
    const [lista, setLista] = useState([]);
    const [completeList, setCompletelist] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // const [priceReal, setPriceReal] = useState('');
    
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
        // .toLocaleString("de-DE") 
    };

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

            // console.log("valor: ", forNumCookie)

            let timeNumber = forNumCookie + 1;

            let cookiesList = [];

            // console.log("cookiesList antes: ", cookiesList)

            for (let i=1; i < timeNumber; i++) {
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
    
                        // console.log("toArrayCookie: ", toArrayCookie);
    
                        let importantItems = [];
    
                        importantItems.push(toArrayCookie[toArrayCookie.length - 1])
    
                        importantItems.push(toArrayCookie[toArrayCookie.length - 2])
    
                        toArrayCookie.pop()
    
                        toArrayCookie.pop()
    
                        // console.log("depois toArrayCookie: ", toArrayCookie);
    
                        const justName = toArrayCookie.join().replaceAll(",", " ");
    
                        // console.log("justName: ", justName);
    
                        // console.log("importantItems: ", importantItems);
    
                        let becomeObj = {
                            id: parseInt(importantItems[1]),
                            word: justName,
                            valuation: importantItems[0]
                        };
    
                        // console.log("becomeObj: ", becomeObj);
    
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
                                  /* console.log(objB) */

                                  objA.linkId = objB.caseId;

                                  theOn.push(objA);

                                  let index = cookiesList.indexOf(objA);

                                  cookiesList.splice(index, 1);
                              };
                          });
                      };

                    //   console.log("theOn: ", theOn);
                    //   console.log('cookiesList: ', cookiesList);

                      if (theOn.length > 0) {
                          setCompletelist(theOn.reverse());
                          setLista(cookiesList.reverse());

                          setLoadingIs(false);
                      } else {
                          setLista(cookiesList.reverse());
                          setLoadingIs(false);
                      };
                };
              })
              .catch((error) => {
                console.log(error);
              });
            };

            // console.log("cookiesList depois .....: ", cookiesList)

            if (cookiesList.length > 0) {
                // console.log("cookiesList.length > 0: ", cookiesList.length > 0)
                arrAlert(cookiesList);
            } else {
                // console.log("cookiesList.length > 0: ", cookiesList.length > 0)
                setLoadingIs(false);
            };
        } else {
        //   console.log("sem o alert")
          setLoadingIs(false);
        };
    }, []);

    const handleSol = () => {
        setProblemAlert(0);
    };

    function getFixPrice(a) {

        // console.log("No gexFIXPRICE.................")
        // console.log("Este eh o a:", a);

        let getPrice = [];

        let contNum = a.split("").filter((ite) => {
            if (ite === "." || ite === ",") {
                return ite;
            } else {
                getPrice.push(ite);
            };
        });

        if (contNum.length != 0) {
            // console.log("Valor invalido tente outro!")
            //setProblemAlert(4);
            return undefined;
        } else {

            if (getPrice.length === 1 || getPrice.length === 2 || getPrice.length === 3) {

                getPrice.push(",00");

                let joinValue = getPrice.join("");

             //   console.log("joinValue: ", joinValue);
                return joinValue;
            } else if (getPrice.length === 4) {

              //  console.log("valor: ", getPrice)

                getPrice.splice(1, 0, '.');

                getPrice.push(",00");

                let joinValue = getPrice.join("");

               // console.log("getPrice: ", joinValue)
                return joinValue;
            } else if (getPrice.length >= 5) {
                // console.log("Valor muito grande!")
                return "haveError";
            };
        };
    };

    const handleCreate = (e) => {
        // console.log('Criando...')
        e.preventDefault();

        if (problemAlert != "notNow") {
            if (name != '' && price != '') {
                // console.log("o que eh o price: ", typeof price)
                const forNum = parseFloat(price);
    
                // console.log('forNum: ', forNum);
    
                if (forNum < 1) {
                    setProblemAlert(1);
                } else {
                    creteAlert();
                };
            } else if (name === '' && price === '') {
               // console.log("caso : (name === '' && price === '' ")
                
                let correctPrice = getFixPrice(price);

               // console.log("price: ", price.length)

                if (price === "") {
                    // console.log("erro normal de falta de preco 4 ...")
                    setProblemAlert(4);
                } else {
                    if (correctPrice === undefined) {
                       // console.log("problema detectado INICIO ...")
                        setProblemAlert(6);
                    } else if (correctPrice === "haveError") {
                      //  console.log("problema com maximo de valor INICIO ...")
                        setProblemAlert(7);
                    };
                };
            } else if (name != '' && price === '') {
               // console.log("caso : (name != '' && price === ''")
                let correctPrice = getFixPrice(price);

               // console.log("price: ", price.length)

             //   console.log("correctPrice: ", correctPrice)
                if (price === "") {
                   // console.log("erro normal de falta de preco 3 ...")
                    setProblemAlert(3);
                } else {
                    if (correctPrice === undefined) {
                    //    console.log("problema detectado INICIO ...")
                        setProblemAlert(6);
                    } else if (correctPrice === "haveError") {
                     //   console.log("problema com maximo de valor INICIO ...")
                        setProblemAlert(7);
                    };
                }
            } else if (name === '' && price != '') {
                // console.log("caso : (name != '' && price === ''")
                const forNum = parseFloat(price);
    
                if (forNum < 1) {
                    setProblemAlert(1);
                } else {
                    setProblemAlert(2);
                }; 
            };
        };
        
        function creteAlert() {
            if (document.cookie.indexOf("lastAlert") > 0) {
                // console.log('A...')

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

                let correctPrice = getFixPrice(price);

                // console.log("oque eh o current: ", correctPrice)

                if (correctPrice === undefined) {
                    // console.log("problema detectado ...")
                    setProblemAlert(6);
                } else if (correctPrice === "haveError") {
                    // console.log("problema com maximo de valor ...")
                    setProblemAlert(7);
                } else {
                    if (completeList.length > 0) {
                        // console.log("completeList.length > 0")
                        if (lista.length > 0) {
                            let verificationList = lista.filter((ite) => {
                                if (ite.word === name && ite.valuation === correctPrice) {
                                    return true;
                                } else {
                                    return null;
                                };
                            });
    
                            let verificationCompleteList = completeList.filter((ite) => {
                                if (ite.word === name && ite.valuation === correctPrice) {
                                    return 1;
                                } else {
                                    return null;
                                };
                            });
    
                            // console.log("so com os dois: ", verificationList, verificationCompleteList)
                            if (verificationList.length === 0 && verificationCompleteList.length === 0) {
                                createOk();
                            } else {
                                // console.log("caso 5...")
                                setProblemAlert(5);
                            };
                        } else {
                            let verificationCompleteList = completeList.filter((ite) => {
                                if (ite.word === name && ite.valuation === correctPrice) {
                                    return true;
                                } else {
                                    return null;
                                };
                            });
    
                            // console.log("so complete: ", verificationCompleteList)
                            if (verificationCompleteList.length === 0) {
                                createOk();
                            } else {
                                setProblemAlert(5);
                            };
                        };
                    } else {      
                        // console.log("negativa para completeList.length > 0")  
                        let verificationList = lista.filter((ite) => {
                            if (ite.word === name && ite.valuation === correctPrice) {
                                return true;
                            } else {
                                return null;
                            };
                        });
    
                        // console.log("so lista: ", verificationList)
                        if (verificationList.length === 0) {
                            createOk();
                        } else { 
                            // console.log("caso 5...")
                            setProblemAlert(5);
                        };
                    };
                };
                
                function createOk() {
                    document.cookie = `alert${timeNumber}=${name} ${timeNumber} ${correctPrice};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
    
                    document.cookie = `lastAlert=${timeNumber};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
    
                    const alertX = {
                        id: timeNumber,
                        word: name,
                        valuation: correctPrice
                    };
    
                    setLista([alertX, ...lista]);
    
                    setName('');
                    setPrice('');
                    setProblemAlert("notNow");
                };
    
            } else {
                // console.log('B...')

                let correctPrice = getFixPrice(price);

                if (correctPrice === undefined) {
                    // console.log("problema detectado ...")
                    setProblemAlert(6);
                } else if (correctPrice === "haveError") {
                    // console.log("problema com maximo de valor ...")
                    setProblemAlert(7);
                } else {

                    // console.log("B... correctPrice: ", correctPrice);

                    document.cookie = `alert1=${name} 1 ${correctPrice};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;

                    document.cookie = `lastAlert=1;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;

                    const alertOne = {
                        id: 1,
                        word: name,
                        valuation: correctPrice
                    };

                    // console.log("B.. alertOne:", alertOne);

                    setLista([alertOne, ...lista]);

                    setName('');
                    setPrice('');
                    setProblemAlert("notNow");
                };
            };
        };
    };

    const handleDelete = (t) => {
        if (t != 0) { 
            // console.log("t eh diferente de zero ...", t);

            lista.filter((val) => {
                if (val.id === t) {
                    // console.log("val.id === t:", val.id)

                    const newItems = lista.filter((ite) => ite.id !== t);

                   // document.cookie = `alert2=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`;

                    if (newItems) {
                        setLista(newItems);
                    };

                    // let getIndexVal = lista.findIndex(i => i.id === deleteItem);
   
                    // console.log("getIndexVal: ", getIndexVal)
   
                    //  if (getIndexVal) {
                    //      document.cookie = `alert${getIndexVal}=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`;
   
                    //      lista.splice(getIndexVal, 1);
                    //  };
   
                    // lista.splice(getIndexVal, 1);
                    // return getIndexVal;
                };
            });

            completeList.filter((val) => {
                if (val.id === t) {
                    // console.log("val.id === t: completeList", val.id);

                    const newItemsDome = completeList.filter((ite) => ite.id !== t);

                    if (newItemsDome) {
                        setCompletelist(newItemsDome);
                    };
                };
            });

            document.cookie = `alert${t}=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`;
        };
    };

    // #ee7575 rgba(244, 19, 19, 0.5)

    return (
        <>
            {loadingIs &&
                <div className={styles.modal_alert_loading}>
                    <img src={loadingIcone} alt="Carregando..." />
                </div>
            }
            {!loadingIs && <main className={styles.container_alert}>
                <section className={styles.alert_creation_area}>
                    <div className={styles.creation_area_box}>
                        <h1>Criar alerta de preço</h1>
                        <p className={styles.p_normal}>Os alertas de preço funcionam por meio de cookies específicos. Ao criar, está concordando e serão salvos em seu dispositivo.</p>
                        {(problemAlert === 2 || problemAlert === 3 || problemAlert === 4) && <p className={styles.p_problem}>Preencha todos os campos.</p>}
                        {problemAlert === 5 && <p className={styles.p_problem}>Este alerta já existe.</p>}
                        {problemAlert === 6 && <p className={styles.p_problem}>Não é permitido usar vírgula ou ponto.</p>}
                        {problemAlert === 7 && <p className={styles.p_problem}>O valor máximo aceito é 9.999,00 reais.</p>}
                        {problemAlert === 1 && <p className={styles.p_problem}>Deve ser de R$ 1,00 o valor mínimo.</p>}
                        <form action="" onSubmit={handleCreate}>
                            <label htmlFor="">
                                Produto:
                                <input 
                                  type="text" 
                                  placeholder="Nome do produto" 
                                  name="Campo de name"
                                  autoComplete="off"
                                  value={name}
                                  onChange={handleName}
                                  onClick={handleSol}
                                  style={(problemAlert === 2 || problemAlert === 4 || problemAlert === 5) ? ({border: ".19em solid rgba(244, 19, 19, 0.5)"}) : null}
                                />
                            </label>
                            <label htmlFor="">
                                Valor:
                                <input 
                                  type="number" 
                                  placeholder="Preço desejado"
                                  name="Campo de preço"
                                  autoComplete="off"
                                  value={price}
                                  onChange={handlePrice}
                                  onClick={handleSol}
                                  style={(problemAlert === 1 || problemAlert === 3 || problemAlert === 4 || problemAlert === 5 || problemAlert === 6) ? ({border: ".19em solid rgba(244, 19, 19, 0.5)"}) : null}
                                />
                            </label>
                            <div>
                                <button 
                                  type="submit" 
                                  onMouseDown={handleCreate}
                                  name="Criar alerta"
                                  aria-label="Criar alerta"
                                >
                                  Criar
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
                {lista.length === 0 && completeList.length === 0 && 
                  <section className={styles.alert_image_area}>
                    <figure>
                        <div className={styles.illustration_contente_img_area}>
                            <img 
                               src={bell}
                            />
                        </div>
                        <figcaption>
                            Informe o nome de um produto e o valor que deseja, depois clique em criar e receba uma notificação quando o produto atingir o valor. 
                            Os alestas que criar vão aparecer aqui. 
                        </figcaption>
                    </figure>
                  </section>
                }
                <section className={styles.alert_card_area}>
                    {completeList.length > 0 && 
                      <div className={styles.alert_title}>
                        <h2>Alertas encerrados</h2>
                      </div>
                    }
                    {completeList.length > 0 && 
                      <section>
                        {completeList.map((data) => (
                            <AlertNameDome key={data.id} item={data} handleDelete={handleDelete} />
                        ))}
                      </section>
                    }
                    {lista.length > 0 && 
                      <div className={styles.alert_title}>
                        <h2>Alertas ativos</h2>
                      </div>
                    }
                    {lista.length > 0 && 
                      <section>
                        {lista.map((data) => (
                            <AlertName key={data.id} item={data} handleDelete={handleDelete} />
                        ))}
                      </section>
                    }
                </section>
            </main>}
            {!loadingIs && lista.length > 2 && <FooterGoUp />} 
        </>
    );
};

export default Alert;