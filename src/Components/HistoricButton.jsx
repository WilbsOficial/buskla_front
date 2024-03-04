import styles from "./HistoricButton.module.css";

const HistoricButton = ({ label, checked, onChange, value }) => {

    return (
        <label className={styles.custom_radio}>
            <input type="radio" checked={checked} onChange={onChange} value={value} />
      <span className={styles.custom_radio_button}></span>
      {label}
        </label>
    );
};

export default HistoricButton;