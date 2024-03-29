import styles from "./CardRa.module.css"; 
import {Link} from "react-router-dom"; 
import api from "../Services/api";

const CardRa = ({item}) => {

  async function handleIncrement(item) {
    // Busca o valor do cookie historico
    function getCookie(name) {
      let cookie = {};
      document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
      });

      return cookie[name];
    };
    const myCookie = getCookie("historico");

    // Se o valor de historico for Sim entra no if
    // Se o valor de historico nao for Sim acaba
    if (myCookie === "Sim") {

      // Pegandoo valor dos cookies timehis e timehisName
      const cookieNameList = ["timehis", "timehisName"];

      let getValidate = [];

      for (let i = 0; i < 2; i++) {
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
      // console.log("getValidate: ", getValidate);

      let timehisNumber = undefined;

      let timehisNameNumber = undefined;

      if (getValidate[0] != undefined && getValidate[0] != undefined) {
        timehisNumber = parseInt(getValidate[0]) + 1;
        timehisNameNumber = parseInt(getValidate[1]) + 1;
      };

      // Guarda os index dos cookies his que estao salvos
      let getAllHisIndex = [];
      
      // Guarda o valor dos cookies
      let getValuesOfHis = [];  

      if (timehisNumber != undefined && timehisNameNumber != undefined) {
        // console.log("getValidate[0] != undefined && getValidate[1] != undefined: ", "VERDADEIRO");
        // Pegando o index dos cookies salvos
        for (let i = timehisNumber; i < timehisNameNumber; i++) {
          if (document.cookie.indexOf(`his${i}`) >= 0) {
            getAllHisIndex.push(i);
          };
        };
        // console.log('getAllHis: ', getAllHisIndex);

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
      } else {
        // console.log("getValidate[0] != undefined && getValidate[1] != undefined: ", "FALSO");

        // Pegando o index dos cookies salvos
        for (let i = 0; i < 15; i++) {
          if (document.cookie.indexOf(`his${i}`) >= 0) {
            getAllHisIndex.push(i);
          };
        };
        // console.log('getAllHis: ', getAllHisIndex);

        // Pegando o valor de todos os cookies his que estao salvos e nao
        for (let r = 0; r < 15; r++) {
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
      };

      // console.log("getValuesOfHis: ", getValuesOfHis);


      // Verificando se o valor de algum cookie encontrado salvo eh igual ao titulo do card clicado 
      const hasEgual = getValuesOfHis.filter((ite) => ite === item._id);

      // console.log('hasEgual: ', hasEgual);

      // Se tiver algum cookie com valor igual ao title do card clicado passa o if e acaba
      // Se nao tiver nem um cookie com valor igual ao title do card clicado entra no if
      if (hasEgual.length === 0) {

        // Pegando todos os index de cookies e verificando qual eh o mair 
        const lastNumber = Math.max(...getAllHisIndex);

        // console.log('lastNumber: ', lastNumber);

        // Se nao tiver index o valor vai ser -1 entao cai no primeiro caso do if
        // Se tiver index com valor entre 0 até 13 entao cai no segundo caso do if
        // Se tiver index com valor igual a 14 entao cai no terceiro caso do if
        if (lastNumber === -Infinity) {
          // Cria um cookie para guadar o id do card
          // console.log('lastNumber === -Infinity: ', lastNumber === -Infinity)
          document.cookie = `his0=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
        } else if (lastNumber >= 0 && lastNumber <= 13) {
          // Cria um cookie para guadar o id do card
          // console.log('lastNumber >= 0 && lastNumber <= 13: ', lastNumber >= 0 && lastNumber <= 13)
          let hisName = lastNumber + 1;
          document.cookie = `his${hisName}=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
        } else if (lastNumber >= 14) {
          // Buscando o valor do cookie timehis
          // console.log("lastNumber === 14: ", lastNumber === 14)

          function getCookie(name) {
            let cookie = {};
            document.cookie.split(';').forEach(function (el) {
              let [k, v] = el.split('=');
              cookie[k.trim()] = v;
            });

            return cookie[name];
          };
          const myCookieTime = getCookie("timehis");

          // Se timehis existir eh por que tem mais que 14 cookie salvos entao entra no caso 1
          // Se timehis nao existir eh por que tem 14 cookie salvos entao cai no else
          if (myCookieTime) {
            // console.log('existe...')

            // Excluindo o antigo his e adiconando ao timeHis um novo valor 
            const forNum = parseInt(myCookieTime);
            const newNum = forNum + 1;

            // console.log('ForNum: ', newNum)

            document.cookie = `his${newNum}=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`

            document.cookie = `timehis=${newNum};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

            // Buscando o cookie timeHisName, atualizando o valor de his e excluindo e criando timehisName
            function getCookie(name) {
              let cookie = {};
              document.cookie.split(';').forEach(function (el) {
                let [k, v] = el.split('=');
                cookie[k.trim()] = v;
              });

              return cookie[name];
            };
            const myCookieName = getCookie("timehisName");

            const forNumName = parseInt(myCookieName)

            let hisName = forNumName + 1;
            document.cookie = `his${hisName}=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

            document.cookie = `timehisName=${hisName};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
          } else {
            // console.log('naoooo existe...')

            // deletando his 0
            document.cookie = `his0=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`

            // criando verificador para  
            document.cookie = `timehis=0;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

            // guardando numero do his 15 = 15 
            document.cookie = `timehisName=15;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

            // criando his 15 
            document.cookie = `his15=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
          };
        };

      };
    };

    // await api.post(`/${item._id}`);
  }; 

  return ( 
    <>
      <Link
        to={`/product/${item._id}`}
        // to={item.link}
        // target="_blank"
        onClick={() => handleIncrement(item)}
        className={styles.container_card_ra}
      >
        <figure className={styles.card_ra_image}>
          <img
            src={item.img}
            alt={item.title}
          />
        </figure>
        <div className={styles.card_ra_data}>
          <div className={styles.ra_data_box}>
            <div className={styles.box_data_title}>
              <p>{item.title}</p>
            </div>
            <div className={styles.box_data_price}>
              <span>R$ {item.price}</span>
            </div>
            <figure className={styles.box_data_store}>
              <div className={styles.store_contente_img_area}>
                <img
                  src={item.logo}
                  alt={item.store}
                />
              </div>
              <figcaption>{item.store}</figcaption>
            </figure>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardRa;