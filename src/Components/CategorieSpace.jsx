import styles from './CategorieSpace.module.css'; 
import categoryOne from '../assets/img1b.png'; 
import categoryTwo from '../assets/img2b.png'; 
import categoryThree from '../assets/img3b.png'; 
import categoryFour from '../assets/img4b.png'; 
import categoryFive from '../assets/img5b.png'; 
import categorySix from '../assets/img6b.png'; 
import categorySeven from '../assets/img7b.png'; 
import categoryEight from '../assets/img8b.png'; 
import categoryNine from '../assets/img9b.png'; 
import categoryTen from '../assets/img10b.png'; 
import categoryEleven from '../assets/img11b.png'; 
import categoryTwelve from '../assets/img12b.png'; 
import {useRef} from "react";

import {Link} from "react-router-dom";

const CategorieSpace = ({showFix}) => {

  const cn = [
    "celulares+e+tabletes",
    "computadores",
    "video+games",
    "jogos+eletronicos",
    "eletrodomesticos",
    "tv+e+audio",
    "casa+e+limpeza",
    "livros",
    "eletronicos+em+geral",
    "construcao+e+ferramentas",
    "roupas",
    "produtos+de+beleza"
  ];
  
  const carousel = useRef();

  const handleLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      {showFix &&
        <section className={styles.box_banner_categorys} id="a1">
          <div className={styles.banner_intro}>
            <header className={styles.intro_title}>
              <h2 className={styles.banner_section_black_title}>Categorias</h2>
              <div className={styles.title_sugestions_buttons}>
                <button
                  className={styles.intro_btn_back}
                  onClick={handleLeft}
                  name="mover para esquerda"
                  aria-label="mover para esquerda"
                >
                  <i className="gg-chevron-left"></i>
                </button>
                <button
                  className={styles.intro_btn_next}
                  onClick={handleRight}
                  name="mover para direita"
                  aria-label="mover para direita"
                >
                  <i className="gg-chevron-right"></i>
                </button>
              </div>
            </header>
            <div className={styles.intro_categorys} ref={carousel} scrolling="no">
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[0]}`}
                  className={styles.category_link}
                >
                  <img src={categoryOne} alt="Ícone da categoria celulares e tablets" />
                  <span>Celulares e Tablets</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[1]}`}
                  className={styles.category_link}
                >
                  <img src={categoryTwo} alt="Ícone da categoria computadores" />
                  <span>Computadores</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[2]}`}
                  className={styles.category_link}
                >
                  <img src={categoryThree} alt="Ícone da categoria video games" />
                  <span>Video Games</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[3]}`}
                  className={styles.category_link}
                >
                  <img src={categoryFour} alt="Ícone da categoria jogos eletrônicos" />
                  <span>Jogos Eletrônicos</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[4]}`}
                  className={styles.category_link}
                >
                  <img src={categoryFive} alt="Ícone da categoria eletrodomésticos" />
                  <span>Eletrodomésticos</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[5]}`}
                  className={styles.category_link}
                >
                  <img src={categorySix} alt="Ícone da categoria tv e áudio" />
                  <span>Tv e Áudio</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[6]}`}
                  className={styles.category_link}
                >
                  <img src={categorySeven} alt="Ícone da categoria casa e limpeza" />
                  <span>Casa e Limpeza</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[7]}`}
                  className={styles.category_link}
                >
                  <img src={categoryEight} alt="Ícone da categoria livros" />
                  <span>Livros</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[8]}`}
                  className={styles.category_link}
                >
                  <img src={categoryNine} alt="Ícone da categoria eletrônicos em geral" />
                  <span>Eletrônicos em Geral</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[9]}`}
                  className={styles.category_link}
                >
                  <img src={categoryTen} alt="Ícone da categoria construção e ferramentas" />
                  <span>Construção e Ferramentas</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[10]}`}
                  className={styles.category_link}
                >
                  <img src={categoryEleven} alt="Ícone da categoria roupas" />
                  <span>Roupas</span>
                </Link>
              </div>
              <div className={styles.categorys_segment}>
                <Link
                  to={`/categories/${cn[11]}`}
                  className={styles.category_link}
                >
                  <img src={categoryTwelve} alt="Ícone da categoria produtos de beleza" />
                  <span>Produtos de Beleza</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default CategorieSpace;