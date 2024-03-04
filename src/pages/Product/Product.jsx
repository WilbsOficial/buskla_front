import CardProduct from "../../Components/CardProduct";
import CardProductList from "../../Components/CardProductList";
import FooterGoUp from "../../Components/FooterGoUp";
import ProductChart from "../../Components/ProductChart";
import styles from "./Product.module.css";
import {useParams} from "react-router-dom";
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import { useEffect, useState } from "react";
import api from "../../Services/api";

const Product = () => {

    const [loadingIs, setLoadingIs] = useState(true);
    const [item, setItem] = useState([]);
    const {id} = useParams("");
    const [problemAlert, setProblemAlert] = useState(0);
    const [price, setPrice] = useState('');
    const [lista, setLista] = useState([]);

   // console.log("pegando id: ", id);

    // await api.post(`/${item._id}`);

    const handlePrice = (e) => {
        setPrice(e.target.value);
        // .toLocaleString("de-DE") 
    };

    useEffect(() => {
        async function arrProduct() {
            await api.post(`/produto/${id}`)
            .then((res) => {
              if (res.data) {
                setItem(res.data);
                arrProductGet(res.data);
              };
            })
            .catch((error) => {
              console.log(error);
            });
        };

        arrProduct();

        async function arrProductGet(ite) {
            // console.log("valores a envia: ", ite.title, ite.price, ite.category)

            await api.post("/produto/outros", {
                theWord: ite.title,
                thePrice: ite.price,
                catName: ite.category
            })
                .then((res) => {
                    setLista(res.data);
                    setLoadingIs(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

    }, []);

    // useEffect(() => {
    //     if (item.length > 0) {
    //         console.log("modou ... agora ...")
    //         async function arrProductGet() {
    //             console.log("valores a envia: ", item.title, item.price, item.category)
    
    //             await api.post("/produto/outros", {
    //                 theWord: item.title, 
    //                 thePrice: item.price, 
    //                 catName: item.category
    //               })
    //               .then((res) => {
    //                 setLista(res.data);
    //                 setLoadingIs(false);
    //               })
    //               .catch((error) => {
    //                 console.log(error);
    //             });
    //         };
    
    //         arrProductGet();
    //     };
    // }, [item]);

   // console.log("item: ", item);

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
        //   console.log("Valor invalido tente outro!")
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

      //  let priceToInt = parseInt(price)

       // let itemPriceToInt = parseInt(item.price)
      
      //  console.log("itemPriceToInt: ", itemPriceToInt, priceToInt)

      // console.log("como esta o preco no item: ", item.price)

        let correctPrice = getFixPrice(price);

        // console.log("como esta o correctPrice: ", correctPrice)

        if (problemAlert != "notNow") {
            if (price != '' && item.price != correctPrice) {
                const forNum = parseFloat(price);
    
                // console.log('forNum: ', forNum);
    
                if (forNum < 1) {
                    setProblemAlert(3);
                } else {
                    creteAlert();
                };
            } else if (price === '') {

               // let correctPrice = getFixPrice(price);

                if (price === "") {
                    // console.log("erro normal de falta de preco 3 ...")
                    setProblemAlert(1);
                } else {
                     if (correctPrice === undefined) {
                     //    console.log("problema detectado INICIO ...")
                        setProblemAlert(5);
                     } else if (correctPrice === "haveError") {
                      //   console.log("problema com maximo de valor INICIO ...")
                        setProblemAlert(6);
                     };
                };
            } else if (item.price === correctPrice) {
                setProblemAlert(4); 
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

                let lista = [];

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
        
                            lista.push(becomeObj);
                        };
                    };
                };

                // console.log("lista: ", lista)
                
                if (correctPrice === undefined) {
                    // console.log("problema detectado ...")
                    setProblemAlert(5);
                } else if (correctPrice === "haveError") {
                    // console.log("problema com maximo de valor ...")
                    setProblemAlert(6);
                } else {
                  if (lista.length > 0) {
                    let verificationList = lista.filter((ite) => {
                        if (ite.word === item.title && ite.valuation === correctPrice) {
                            return true;
                        } else {
                            return null;
                        };
                    });

                    // console.log("so lista: ", verificationList)
                    if (verificationList.length === 0) {
                        createOk();
                    } else { 
                        setProblemAlert(2);
                    };
                  } else {
                    createOk();
                  };
                };

                function createOk() {
                    document.cookie = `alert${timeNumber}=${item.title} ${timeNumber} ${correctPrice};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
    
                    document.cookie = `lastAlert=${timeNumber};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
    
                    const alertX = {
                        id: timeNumber,
                        word: item.title,
                        valuation: correctPrice
                    };
    
                    // console.log("alertX A...", alertX)

                    setPrice('');
                    setProblemAlert("notNow");
                };
    
            } else {
                // console.log('B...')

                let correctPrice = getFixPrice(price);

                // console.log("B... correctPrice: ", correctPrice);
    
                document.cookie = `alert1=${item.title} 1 ${correctPrice};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
    
                document.cookie = `lastAlert=1;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;

                const alertOne = {
                    id: 1,
                    word: item.title,
                    valuation: correctPrice
                };

                // console.log("B.. alertOne:", alertOne);

                setPrice('');
                setProblemAlert("notNow");
    
            };
        };
    };

   // console.log("item: ", item);

    return (
        <>
            {loadingIs &&
                <div className={styles.modal_product_loading}>
                    <img src={loadingIcone} alt="Carregando..." />
                </div>
            }
            {!loadingIs && <main className={styles.container_product}>
                <section className={styles.product_card_area}>
                    <CardProduct item={item} />
                </section>
                <section className={styles.product_alert_area}>
                    <div className={styles.product_area_box}>
                        <h1>Criar alerta de preço</h1>
                        <p className={styles.p_normal}>Os alertas de preço funcionam por meio de cookies específicos. Ao criar, está concordando e serão salvos em seu dispositivo.</p>
                        {problemAlert === 1 && <p className={styles.p_problem}>Adicione um valor de preço.</p>}
                        {problemAlert === 2 && <p className={styles.p_problem}>Este alerta já existe.</p>}
                        {problemAlert === 3 && <p className={styles.p_problem}>Deve ser de R$ 1,00 o valor mínimo.</p>}
                        {problemAlert === 4 && <p className={styles.p_problem}>Escolha um valor diferente.</p>}
                        {problemAlert === 5 && <p className={styles.p_problem}>Não é permitido usar vírgula ou ponto.</p>}
                        {problemAlert === 6 && <p className={styles.p_problem}>O valor máximo aceito é 9.999,00 reais.</p>}
                        <div className={styles.product_name_box}>
                            <div className={styles.name_box}>
                                <p>{item.title}</p>
                            </div>
                        </div>                        
                        <form action="" onSubmit={handleCreate}>
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
                                  style={(problemAlert === 1 || problemAlert === 2 || problemAlert === 3 || problemAlert === 4) ? ({border: ".19em solid rgba(244, 19, 19, 0.5)"}) : null}
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
                <section className={styles.product_graphic_area}>
                    <header>
                        <h2>Gráfico de preços</h2>
                    </header>
                    <ProductChart itemGroup={item.group} />
                </section>
                <section className={styles.product_others_stores_area}>
                    <header>
                        <h2>Outras opções</h2>
                    </header>
                    <div className={styles.cards_area}>
                      {lista.map((data) => (
                        <CardProductList key={data._id} item={data} />
                      ))}
                    </div>
                </section>
            </main>}
            {!loadingIs && <FooterGoUp />}
        </>
    );
};

export default Product;