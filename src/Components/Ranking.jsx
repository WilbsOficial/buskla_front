import {useEffect, useState} from "react";
import styles from "./Ranking.module.css"; 
import CardRa from "./CardRa";
import api from "../Services/api";

const Ranking = ({showFix}) => {
 
  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function createListRanking() {
      await api.get("/ranking")
      .then((res) => {
        setLista(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    createListRanking();
  }, []);

  return ( 
    <>
      {showFix && 
        <section className={styles.box_banner_ranking} id="a2">
          <header className={styles.intro_title}>
            <h2 className={styles.banner_section_white_title}>Mais buscados</h2>
          </header>
          <div className={styles.cards_area}>
            {lista && lista.map((data) => (
              <CardRa key={data._id} item={data} />
            ))}
          </div>
        </section>
      }
    </>
  );
};

export default Ranking;