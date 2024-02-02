import styles from './FooterGoUp.module.css'; 

const FooterGoUp = (props) => {
  return (
    <div className={styles.back_top}>
        <a href='#nav_container' className={styles.back_top_title}>
          Voltar ao topo
          {!props.hseta && <i className="gg-chevron-up"></i>}
        </a>
    </div>
  );
};

export default FooterGoUp;