import styles from "./CardList.module.css"; 
import {Link} from "react-router-dom"; 
import api from "../Services/api";

const CardList = ({item}) => {

  async function handleIncrement(id) {
    await api.post(`/${id}`);
  };

  return (
    <div className={styles.container_list}>
      <Link
        to={item.link}
        target="_blank"
        className={styles.list_product}
        onClick={() => handleIncrement(item._id)}
      >
        <div className={styles.list_product_image}>
          <img src={item.img} alt={item.title} />
        </div>
        <div className={styles.list_product_data}>
          <div className={styles.product_data_title}>
            <p>{item.title}</p>
          </div>
          <div className={styles.product_data_price}>
            <span>R$ {item.price}</span>
          </div>
          <div className={styles.product_data_box_store}>
            <figure className={styles.store_contente}>
              <div className={styles.store_contente_img_area}>
                <img src={item.logo} alt={item.store} />
              </div>
              <figcaption>{item.store}</figcaption>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardList;