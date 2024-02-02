import styles from "./CardOferta.module.css"; 
import {Link} from "react-router-dom"; 
import api from "../Services/api";

const CardOferta = ({item}) => {

  async function handleIncrement(id) {
    await api.post(`/${id}`);
  };
  
  return (
    <>
      <Link
        // to={`/product/${item._id}`}
        to={item.link}
        target="_blank"
        onClick={() => handleIncrement(item._id)}
        className={styles.container_card_oferta}
      >
        <figure className={styles.card_oferta_image}>
          <img
            src={item.img}
            alt={item.title}
          />
        </figure>
        <div className={styles.card_oferta_data}>
          <div className={styles.oferta_data_box}>
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

export default CardOferta;