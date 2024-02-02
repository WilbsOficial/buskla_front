import {useEffect, useState} from "react";
import styles from "./Ofertas.module.css"; 
import CardOferta from "./CardOferta";
import api from "../Services/api";

const Ofertas = ({setBannerThr, showFix}) => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    async function arrTwe() {
      await api.get("/ofertas")
      .then((res) => {
        setLista(res.data);
        setBannerThr(false);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    arrTwe();
  }, [setBannerThr]);
  
  return ( 
    <>
      {showFix &&
        <section className={styles.box_banner_ofertas} id="a4">
          <header className={styles.intro_title}>
            <h2 className={styles.banner_section_title}>Ofertas selecionadas</h2>
          </header>
          <div className={styles.cards_area}>
            {lista && lista.map((data) => (
              <CardOferta key={data._id} item={data} />
            ))}
          </div>
        </section>
      }
    </>
  );
};

export default Ofertas;