import styles from "./CardCategorie.module.css"; 
import {Link} from "react-router-dom"; 
import api from "../Services/api";

const CardCategorie = ({item}) => {

  async function handleIncrement(item) {
    function getCookie(name) {
      let cookie = {};
      document.cookie.split(';').forEach(function (el) {
        let [k, v] = el.split('=');
        cookie[k.trim()] = v;
      });

      return cookie[name];
    };
    const myCookie = getCookie("historico");

    if (myCookie === "Sim") {
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

      let timehisNumber = undefined;

      let timehisNameNumber = undefined;

      if (getValidate[0] != undefined && getValidate[0] != undefined) {
        timehisNumber = parseInt(getValidate[0]) + 1;
        timehisNameNumber = parseInt(getValidate[1]) + 1;
      };

      let getAllHisIndex = [];
      
      let getValuesOfHis = [];  

      if (timehisNumber != undefined && timehisNameNumber != undefined) {
        for (let i = timehisNumber; i < timehisNameNumber; i++) {
          if (document.cookie.indexOf(`his${i}`) >= 0) {
            getAllHisIndex.push(i);
          };
        };
        
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
        for (let i = 0; i < 15; i++) {
          if (document.cookie.indexOf(`his${i}`) >= 0) {
            getAllHisIndex.push(i);
          };
        };

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

      const hasEgual = getValuesOfHis.filter((ite) => ite === item._id);

      if (hasEgual.length === 0) {
        const lastNumber = Math.max(...getAllHisIndex);

        if (lastNumber === -Infinity) {
          document.cookie = `his0=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
        } else if (lastNumber >= 0 && lastNumber <= 13) {
          let hisName = lastNumber + 1;
          document.cookie = `his${hisName}=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
        } else if (lastNumber >= 14) {
          function getCookie(name) {
            let cookie = {};
            document.cookie.split(';').forEach(function (el) {
              let [k, v] = el.split('=');
              cookie[k.trim()] = v;
            });

            return cookie[name];
          };
          const myCookieTime = getCookie("timehis");

          if (myCookieTime) {
            const forNum = parseInt(myCookieTime);
            const newNum = forNum + 1;

            // console.log('ForNum: ', newNum)

            document.cookie = `his${newNum}=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`

            document.cookie = `timehis=${newNum};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

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
            document.cookie = `his0=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax`
 
            document.cookie = `timehis=0;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

            document.cookie = `timehisName=15;expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`

            document.cookie = `his15=${item._id};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`
          };
        };
      };
    };

    await api.post(`/${item._id}`);
  }; 
   
  return (
    <>
      <Link
        to={`/product/${item._id}`}
        // to={item.link}
        // target="_blank"
        onClick={() => handleIncrement(item)}
        className={styles.container_card_categorie}
      >
        <figure className={styles.card_categorie_image}>
          <img
            src={item.img}
            alt={item.title}
          />
        </figure>
        <div className={styles.card_categorie_data}>
          <div className={styles.categorie_data_box}>
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

export default CardCategorie;