import styles from './Sobre.module.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import lightBulbIcone from '../../assets/idea-1s-200px.svg';
import targetIcone from '../../assets/bulleye-1s-200px.svg';
import FooterGoUp from '../../Components/FooterGoUp';
 
const Sobre = () => {

  const [ligado, setLigado] = useState(false);
  const [menu, setMenu] = useState(false);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLigado(true);
    }, 400);
    return () => clearTimeout(timer);
  });

  const handleAddMenu = () => {
    setMenu(true);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; 
  }

  const handleLessMenu = () => {
    setMenu(false);
    document.documentElement.style.overflow = 'auto';
    document.body.scroll = "yes";
  }

  return (
    <>
      {!ligado && <div className={styles.modal_condition_loading}>
        <img src={loadingIcone} alt="Carregando..." />
      </div>}
      {ligado && <div className={styles.container_conditions}>
      <header className={styles.box_conditions}>
        <div className={styles.links_marge}>
          <nav className={styles.box_conditions_links}>
          <Link 
            className={styles.btn_activated}
          >Sobre</Link>
          <Link 
            className={styles.link_button_two}
            to="/privacidade"
          >Política de privacidade</Link>
          <Link 
            className={styles.link_button_thr}
            to="/uso"
          >Condições de uso</Link>
          <Link 
            className={styles.link_button_for}
            to="/cookies"
          >Cookies</Link>
          </nav>
        </div>
        <div className={styles.box_conditions_links_mobile}>
          <button onClick={handleAddMenu}>
            <i className="gg-menu" name="menu de condições"></i>
          </button>
        </div>
      </header>
      {menu &&
        <div 
          className={styles.links_mobile_bc}
          onClick={handleLessMenu}
        >
        </div>
      }
      {menu &&
        <aside 
          className={styles.links_mobile_container}
        >
          <nav className={styles.mobile_container_links}>
            <ul>
              <li className={styles.links_ul_normal}>
                <Link 
                  onClick={handleLessMenu}
                >Sobre</Link>
              </li>
              <li className={styles.links_ul_normal}>
              <Link 
                  onClick={handleLessMenu}
                  to="/privacidade"
                >Política de privacidade</Link>
              </li>
              <li className={styles.links_ul_normal}>
                <Link
                  onClick={handleLessMenu}
                  to="/uso"
                >Condições de uso</Link>
              </li>
              <li className={styles.links_ul_normal}>
                <Link
                  onClick={handleLessMenu}
                  to="/cookies"
                >Cookies</Link>
              </li>
            </ul>
          </nav>
        </aside>
      } 
      <main className={styles.box_condition_text}>
        {/* {!ligado && <div className={styles.modal_condition_loading}>
          <img src={loadingIcone} alt="Carregando..." />
        </div>} */}
        <section className={styles.condition_text}>
          <header className={styles.text_title}>
            <div className={styles.title_marge}>
              <h2>Sobre</h2>
            </div>
          </header>
          <div className={styles.text_contente}>
            <div className={styles.contente_part_one}>
              <figure className={styles.part_one_icon_come}>
                <img src={lightBulbIcone} alt="uma lâmpada, simbolizando ideia" />
              </figure> 
              <article className={styles.part_one_text}>
                <p className={styles.text_paragraph_normal}>
                  O Busk!á.com surgiu em 2023, com um ideal de que temos como o nosso
                  principal objetivo, lutar contra a complexidade em volta
                  de uma das situações a qual quase todo o consumidor já se viu diante, 
                  e que teve que lidar alguma vez na vida pelo menos, e sim estamos falando da
                  árdua tarefa de encontrar alguma loja onde um produto que se deseja é vendido pelo menor preço. 
                </p>
              </article>
              <div className={styles.part_one_icon_go}>
                  <img src={lightBulbIcone} alt="" />
              </div> 
            </div>
            <div className={styles.contente_part_two}>
              <figure className={styles.part_two_icon_go}>
                <img src={targetIcone} alt="um alvo, simbolizando objetivo" />
              </figure>
              <article className={styles.part_two_text}>
                <p className={styles.text_paragraph_normal}>
                  E por isso estamos sempre pensando em novas maneiras de facilitar a vida dos consumidores, na hora 
                  de encontrar os melhores preços, com isso a nossa missão é evoluir a plataforma Busk!á.com e por 
                  isso sempre estamos pensando em nos esforçar para que cada vez mais possamos revolucionar e incluir novas maneiras,
                  que nunca foram antes vistas para se ter acesso as lojas e encontrar aqueles seus produtos favoritos.
                </p>
              </article>
            </div>
          </div>  
        </section>
      </main>
      <FooterGoUp />
      {/* <footer className={styles.back_top}>
        <a href="#nav_container" className={styles.back_top_title}>
          Voltar ao topo
          <i className="gg-chevron-up" name="ícone voltar ao topo"></i>
        </a>
      </footer> */}
      </div>} 
    </>
  );
};

export default Sobre;