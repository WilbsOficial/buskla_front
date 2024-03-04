import styles from "./Historic.module.css";
import { useEffect, useState } from "react";
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import HistoricButton from "../../Components/HistoricButton";
import clock from '../../assets/clock-1-1s-200px.svg'; 
import CardHistoric from "../../Components/CardHistoric";
import FooterGoUp from "../../Components/FooterGoUp";
import api from "../../Services/api";

const Historic = () => {
   
    const [loadingIs, setLoadingIs] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const [indexList, setIndexList] = useState([]);
    const [lista, setLista] = useState([]);

    useEffect(() => {
      function getCookie(name) {
            let cookie = {};
            document.cookie.split(';').forEach(function (el) {
                let [k, v] = el.split('=');
                cookie[k.trim()] = v;
            });

            return cookie[name];
      };
      const myCookie = getCookie("historico");

    //   console.log(myCookie);

      if (myCookie === "Nao") {
        setSelectedOption('Não');
        setLoadingIs(false);
      } else if (myCookie === "Sim") {
        setSelectedOption('Sim');
        getCardsHistoric();
      } else if (myCookie === undefined) {
        setSelectedOption('Não');
        setLoadingIs(false);
      };

      function getCardsHistoric() {

        const cookieNameList = ["timehis", "timehisName"];

        let getValidate = [];

        for (let i=0; i < 2; i++) {
            function getCookie(name) {
                let cookie = {};
                document.cookie.split(';').forEach(function (el) {
                  let [k, v] = el.split('=');
                  cookie[k.trim()] = v;
                });
    
                return cookie[name];
            };
            const myCookieValue = getCookie(cookieNameList[i]);

            getValidate.push(myCookieValue);
        };

        let timehisNumber = undefined;

        let timehisNameNumber = undefined;

        if (getValidate[0] != undefined && getValidate[0] != undefined) {
            timehisNumber = parseInt(getValidate[0]) + 1;
            timehisNameNumber = parseInt(getValidate[1]) + 1;
        };

        // Guarda o valor dos cookies
        let getValuesOfHis = [];  

        if (timehisNumber != undefined && timehisNameNumber != undefined) {

            // Pegando o index dos cookies salvos
            for (let i = timehisNumber; i < timehisNameNumber; i++) {
                if (document.cookie.indexOf(`his${i}`) >= 0) {
                    getAllHisIndex.push(i);
                };
            };
            // console.log('getAllHis: ', getAllHisIndex);

            setIndexList(getAllHisIndex);

            // Pegando o valor de todos os cookies his que estao salvos e nao
            for (let r = timehisNumber; r < timehisNameNumber; r++) {
                function getCookieValue(name) {
                    let cookie = {};
                    document.cookie.split(';').forEach(function (el) {
                        let [k, v] = el.split('=');
                        cookie[k.trim()] = v;
                    });

                    return cookie[name];
                };
                const myCookieValue = getCookieValue(`his${r}`);

                getValuesOfHis.push(myCookieValue);
            };

            arrHis(getValuesOfHis);

        } else {

            let getAllHisIndex = [];

            // if (document.cookie.indexOf("his0") > 0) {

            // }

            // Pegando o index dos cookies salvos
            for (let i = 0; i < 15; i++) {
                if (document.cookie.indexOf(`his${i}`) > 0) {
                    getAllHisIndex.push(i);
                };
            };
            // console.log('getAllHis: ', getAllHisIndex);

            setIndexList(getAllHisIndex);

            // Pegando o valor de todos os cookies his que estao salvos e nao
            if (getAllHisIndex.length > 0){
                for (let r = 0; r < getAllHisIndex.length; r++) {
                    function getCookieValue(name) {
                      let cookie = {};
                      document.cookie.split(';').forEach(function (el) {
                        let [k, v] = el.split('=');
                        cookie[k.trim()] = v;
                      });
            
                      return cookie[name];
                    };
                    const myCookieValue = getCookieValue(`his${r}`);
            
                    getValuesOfHis.push(myCookieValue);
                  };

                arrHis(getValuesOfHis);
            } else {
                setLoadingIs(false);
            };
           
        };

        async function arrHis(valuesOfHis) {
          await api.post("/historico", {
            hisList: valuesOfHis
          })
          .then((res) => {
            const preList = res.data;
            setLista(preList.reverse());
            setLoadingIs(false);
          })
          .catch((error) => {
            console.log(error);
          });
        };

        console.log(getValuesOfHis);

      };
    }, []);

    // console.log("indexList: ", indexList)

    // console.log("lista: ", lista);

    const handleRadioChange = (event) => {
        // console.log('selectedOption: ', event.target.value)

        if (event.target.value === "Sim") {
            document.cookie = `historico=Sim;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
            setSelectedOption(event.target.value);
        } else {

            document.cookie = `historico=Nao;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;
            setSelectedOption(event.target.value);

            for (let g=0; g < indexList.length; g++) {
                document.cookie = `his${indexList[g]}=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`;
            };

            // Excluindo o verificador para o do inicio
            document.cookie = `timehis=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`

            // Excluindo o verificador para o do final
            document.cookie = `timehisName=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`
          
            setLista([]);

        };
    };

    return (
        <>
            {loadingIs &&
                <div className={styles.modal_historic_loading}>
                    <img src={loadingIcone} alt="Carregando..." />
                </div>
            }
            {!loadingIs && <main className={styles.container_historic}>
                <section className={styles.historic_decision_area}>
                    <div className={styles.decision_area_box}>
                        <h1>Deseja ativar o histórico de busca?</h1>
                        <p>O histórico de busca funciona por meio de cookies específicos. Ao ativar, está concordando e serão salvos em seu dispositivo.</p>
                        <div className={styles.area_box_radio}>
                            <HistoricButton 
                                label="Não"
                                checked={selectedOption === 'Não'}
                                onChange={handleRadioChange}
                                value="Não"
                            />
                            <div className={styles.separate}></div>
                            <HistoricButton
                                label="Sim"
                                checked={selectedOption === 'Sim'}
                                onChange={handleRadioChange}
                                value="Sim"
                            />
                        </div>
                    </div>
                </section>
                {lista.length === 0 && <section className={styles.historic_image_area}>
                    <figure>
                        <div className={styles.illustration_contente_img_area}>
                            <img 
                               src={clock}
                            />
                        </div>
                        <figcaption>O histórico de busca registra todos os produtos que foram acessados por voce. Ative o histórico de busca para que eles apareçam aqui.</figcaption>
                    </figure>
                </section>}
                {lista.length > 0 && <section className={styles.historic_card_area}>
                    {lista.map((data) => (
                        <CardHistoric key={data._id} item={data} />
                    ))}
                </section>}
            </main>}
            {!loadingIs && lista.length > 2 && <FooterGoUp />}
        </>
    ); 
};

export default Historic;
