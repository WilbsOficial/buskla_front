import {useEffect, useState, useRef} from "react";
import CardSuggestions from './CardSuggestions';
import styles from "./Suggestions.module.css"; 
import api from "../Services/api";

const Suggestions = ({showFix}) => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    if (lista.length === 0) { 
      
      let verificationList = [];

      const theCookieNames = ["ktone", "kttwo", "ktthr"];

      for (var t = 0; t < 3; t++) {
        function getCookie(name) {
          let cookie = {};

          document.cookie.split(';').forEach(function (el) {
            let [k, v] = el.split('=');
            cookie[k.trim()] = v;
          });

          return cookie[name];
        };

        const cookieTime = getCookie(theCookieNames[t]);

        verificationList.push(cookieTime);
      };

      const justItems = verificationList.filter((ite) => {
        if (ite !== undefined && ite !== null) {
          return ite;
        } else {
          return null;
        };
      });

      if (justItems.length > 0) {
        dataGetSugestoes(justItems);
      } else {
        dataGetSugestoes([]);
      };

      async function dataGetSugestoes(bodyOfTheReq) {
        await api.post("/sugestoes", {
          searchNames: bodyOfTheReq,
        }).then((res) => {
          setLista(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      };
    };
  }, [lista]);

  const carousel = useRef();

  const handleLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      {showFix &&
        <section className={styles.box_banner_suggestions} id="a3">
          <div className={styles.banner_intro}>
            <header className={styles.intro_title}>
              <h2 className={styles.banner_section_black_title}>Sugestões</h2>
            </header>
            <button
              className={styles.intro_btn_back}
              onClick={handleLeft}
              name="mover para esquerda"
              aria-label="mover para esquerda"
            >
              <i className="gg-chevron-left"></i>
            </button>
            <div className={styles.intro_carousel_area} ref={carousel}>
              {lista && lista.map((data) => (
                <CardSuggestions key={data._id} item={data} />
              ))}
            </div>
            <button
              className={styles.intro_btn_next}
              onClick={handleRight}
              name="mover para direita"
              aria-label="mover para direita"
            >
              <i className="gg-chevron-right"></i>
            </button>
          </div>
        </section>
      }
    </>
  );
};

export default Suggestions;