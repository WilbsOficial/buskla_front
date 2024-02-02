import styles from './Cookies.module.css'; 
import { useMemo, useState } from 'react';
import {Link} from 'react-router-dom';

const Cookies = () => {

  const [choice, setChoice] = useState(''); 
 
  const [btnClick, setBtnClick] = useState(false);

  const handleDecision = () => {
    setChoice('dizOn');
    setBtnClick(true);
  };

  useMemo(() => {
    const yearMonth = [
      "1",
      "2",
      "3",
      {
        day: "30",
        month: "Apr",
        monthDay: "Tue"
      },
      {
        day: "31",
        month: "May",
        monthDay: "Fri"
      },
      {
        day: "30",
        month: "June",
        monthDay: "Sun"
      },
      {
        day: "31",
        month: "July",
        monthDay: "Wed"
      },
      {
        day: "31",
        month: "Aug",
        monthDay: "Sat"
      },
      {
        day: "30",
        month: "Sept",
        monthDay: "Mon"
      },
      {
        day: "31",
        month: "Oct",
        monthDay: "Thu"
      },
      {
        day: "30",
        month: "Nov",
        monthDay: "Sat"
      },
      {
        day: "31",
        month: "Dec",
        monthDay: "Tue"
      },
    ];

    if (choice === 'dizOn') {
      const theData = new Date();

      const userMonth = theData.getMonth() + 1;

      const monthToExpire = userMonth + 2;

      let dat = yearMonth[monthToExpire];

      document.cookie = `concordo=sim;expires=${dat.monthDay}, ${dat.day} ${dat.month} 2024 12:59:59 GMT;path=/;SameSite=Lax`;
    };
  }, [choice]);

  return (
    <>
      <div className={styles.box_cookies} style={btnClick ? {display: "none"} : null}>
        <div className={styles.cookies_space}>
          <div className={styles.cookies_space_title}>
            <i className="gg-info"></i>
            <span>
              Este site usa cookies
            </span>
          </div>
          <div className={styles.cookies_space_text}>
            <p>
              Dados de navegação serão armazenados e usados para recomendar conteúdo de seu interesse.
            </p>
          </div>
          <div className={styles.cookies_space_btns}>
            <div className={styles.space_btns_link}>
              <Link
                className={styles.btns_link}
                to="/cookies"
              >
                Cookies
              </Link>
            </div>
            <div className={styles.space_btns_buttons}>
              <button
                className={styles.button_no}
                onClick={() => (setBtnClick(true))}
              >
                Recuso
              </button>
              <button
                className={styles.button_yes}
                onClick={handleDecision}
              >
                Aceito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cookies;