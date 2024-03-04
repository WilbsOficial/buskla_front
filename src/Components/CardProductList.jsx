import styles from "./CardProductList.module.css"; 
import {Link} from "react-router-dom"; 
// import api from "../Services/api";

const CardProductList = ({item}) => {

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
    // <div className={styles.container_list}>
    //   <Link 
    //     // to={item.link}
    //     // target="_blank"
    //     className={styles.list_product}
    //     // onClick={() => handleIncrement(item._id)}
    //   >
    //     <div className={styles.list_product_image}>
    //       <img src="https://m.media-amazon.com/images/I/41dxVVHRNWL._AC_SX679_.jpg" />
    //     </div>
    //     <div className={styles.list_product_data}>
    //       <div className={styles.product_data_title}>
    //         <p>Controle DualSense - Branco </p>
    //       </div> 
    //       <div className={styles.product_data_price}>
    //         <span>R$ 395,00</span>
    //       </div>
    //       <div className={styles.product_data_box_store}>
    //         <figure className={styles.store_contente}>
    //         <div className={styles.store_contente_img_area}>
    //           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAsVBMVEUAhv8Ziv////8Ahf8AhP8Agf8AfP8Ai/8Af//q8v+myf/V5f/D2v/Q4v+gxf+Dtv8Ac//e6/8Abf/2+v9hpf++1/87lP9bov+uzv8AeP9+s/9rqf+00f/I3f+Zwf+Svf8pj/+/wpH/zQD/pAD/fwD/VwD/PQD/LgD/HTL/A2b/AJT/ALHtAMDUANG6AOKhAPKGAP50AP9fL/9KUv8Tt/8Aze4G18EL4JQQ6mQV9x4QxqCLDKF4AAAA8ElEQVQ4je2P2XLDIAxFQUgE8BLjpNiunYQm3fd9+/8Pq3DSmb71pdOnHISuGC4ChNjzf6BWHEZrrXga5EQaBRlhaNyfA0WQB2CBLHgfAOwSGtPmXVEmBx2CK2AK2ENpq9ZnQ2VLmOth0WVuNCwXfM5BFcD52nm/qrMSmqotar81DHkQdmphBmIG1vdcuBy4J2syKCkRozANRupDUXQxoNQxUFKVXqk4c6DAiYVMKl7zQIWo1PabO2WMpl3FNmRSSUfrzfHJ6dn5xeXV9c3t3f3D41MVnl9e394/Pkc/EQopJz+QfAMRGfPdb89fIH/hC6h0Dfn7LS2zAAAAAElFTkSuQmCC" />
    //         </div>
    //         <figcaption>Magazine Luiza</figcaption>
    //         </figure>
    //       </div>
    //     </div>
    //   </Link>
    // </div>
    <>
       <Link 
        to={`/product/${item._id}`}
        className={styles.container_card_product_others}
        onClick={() => handleIncrement(item)}
      >
        <figure className={styles.card_product_others_image}>
          <img 
            src={item.img}
            alt={item.title}
          /> 
        </figure>
        <div className={styles.card_product_others_data}>
          <div className={styles.product_others_data_box}>
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

export default CardProductList;