import styles from "./CardProduct.module.css"; 

const CardProduct = ({item}) => {

 // console.log("no produto", item);

  return (
    <div className={styles.container_list}>
      <div 
        className={styles.list_product}
      >
        <div className={styles.list_product_image}>
          <img src={item.img} />
        </div>
        <div className={styles.list_product_data}>
          <div className={styles.product_data_title}>
            <p>{item.title}</p>
          </div> 
          <div className={styles.product_data_price}>
            <span>R$ {item.price}</span>
          </div>
          <div className={styles.product_data_box_store}>
            <a target="_blank" href={item.link}>
              Ver na loja
              <i className="gg-arrow-top-right"></i>
            </a> 
            <figure className={styles.store_contente}>
            <div className={styles.store_contente_img_area}>
              <img src={item.logo} />
            </div>
            <figcaption>{item.store}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;