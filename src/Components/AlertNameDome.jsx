import styles from "./AlertNameDome.module.css";
import {Link} from "react-router-dom"; 

const AlertNameDome = ({ item, handleDelete }) => {

   // console.log("item AlertNameDome: ", item.word);
   
    return (
        <>
            <div className={styles.container_list}>
                <div className={styles.list_product}>
                    <div className={styles.product_delete_box}>
                        <Link 
                          to={`/product/${item.linkId}`} 
                          onClick={() => handleDelete(item.id)}
                          className={styles.notification_box}
                        >
                          <i className="gg-bell"></i>
                          <span>Ver produto</span>
                        </Link>
                        <button onClick={() => handleDelete(item.id)}>
                            <i className="gg-trash"></i>
                        </button>
                    </div>
                    <div className={styles.product_name_box}>
                        <div className={styles.name_box}>
                            <p>{item.word}</p>
                        </div>
                    </div>
                    <div className={styles.product_price_box}>
                        <div className={styles.price_box_now}>
                            <p>Preço atual:</p>
                            <div className={styles.price_box}>
                                <p>R$ {item.valuation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlertNameDome;