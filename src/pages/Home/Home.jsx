import styles from "./Home.module.css";
import {useState, useEffect} from "react";
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import CategorieSpace from "../../Components/CategorieSpace";
import Ranking from "../../Components/Ranking";
import Suggestions from "../../Components/Suggestions";
import Ofertas from "../../Components/Ofertas";
import FooterHome from "../../Components/FooterHome";

// import { Link } from "react-router-dom";

const Home = () => {

  const [bannerThr, setBannerThr] = useState(true);
  const [loadingIs, setLoadingIs] = useState(false);
  const [showFix, setshowFix] = useState(false);

  useEffect(() => {
    if (bannerThr) {
      setLoadingIs(true);
    } else {
      setshowFix(true)
      setLoadingIs(false);
    }
  }, [bannerThr]);
   
  return (
    <main className={styles.container_home}>
      {loadingIs &&
        <div className={styles.modal_home_loading}>
          <img src={loadingIcone} alt="Carregando..." />
        </div>
      }
      <div className={styles.box_home}>
        {/* <Link to="/testes">Area de testes...</Link> */}
        <CategorieSpace showFix={showFix} />
        <Ranking showFix={showFix} />
        <Suggestions showFix={showFix} />
        <Ofertas setBannerThr={setBannerThr} showFix={showFix} />
      </div>
      {showFix && <FooterHome />}
    </main>
   ); 
};

export default Home;