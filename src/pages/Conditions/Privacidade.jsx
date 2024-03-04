import styles from './Privacidade.module.css'; 
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FooterGoUp from '../../Components/FooterGoUp';
import loadingIcone from '../../assets/Spinner-1s-200px.svg';

const Privacidade = () => {

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
      {!ligado && <div className={styles.modal_privacidade_loading}>
        <img src={loadingIcone} alt="Carregando..." />
      </div>}
      {ligado && <div className={styles.container_conditions}>
        <header className={styles.box_conditions}>
          <div className={styles.links_marge}>
            <nav className={styles.box_conditions_links}>
          <Link 
            className={styles.link_button_one}
            to="/sobre"
          >Sobre</Link>
          <Link 
            className={styles.btn_activated}
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
                    to="/sobre"
                  >Sobre</Link>
                </li>
                <li className={styles.links_ul_normal}>
                <Link 
                    onClick={handleLessMenu}
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
          <header className={styles.text_title}>
            <div className={styles.title_marge}>
              <h2>Política de privacidade</h2>
            </div>  
          </header>
          <section className={styles.condition_text}>
            <article className={styles.text_contente}>
              <h3>1. Informações gerais</h3>
              <p className={styles.contente_paragraph_normal}>
                A presente Política de Privacidade contém informações sobre coleta, uso, armazenamento, tratamento 
                e proteção dos dados pessoais dos usuários e visitantes do site Busk!á.com, com a finalidade de 
                demonstrar absoluta transparência quanto ao assunto e esclarecer a todos interessados sobre os tipos 
                de dados que são coletados, os motivos da coleta e a forma como os usuários 
                podem gerenciar ou excluir as suas informações pessoais.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Esta Política de Privacidade aplica-se a todos os usuários e visitantes do site Busk!á.com e 
                integra os<strong> Termos e Condições Gerais de Uso </strong>do site Busk!á.com.
              </p>
              <h3>2. Como recolhemos os dados pessoais do uruário e do visitante?</h3>
              <p className={styles.contente_paragraph_normal}>
                Os dados pessoais do usuário e visitante são recolhidos pela plataforma da seguinte forma:
              </p>
              <p className={styles.contente_paragraph_normal}>
                <strong>Quando um usuário e visitante acessa páginas do site Busk!á.com: </strong>as informações 
                sobre interação e acesso são coletadas pela plataforma para garantir uma melhor experiência 
                ao usuário e visitante. Estes dados podem tratar sobre as 
                palavras-chaves utilizadas em uma busca, visualizações de páginas, histórico de navegação e produtos de interesse por meio de alertas.
              </p>
              <h3>3. Quais dados pessoais recolhemos sobre o usuário e visitante?</h3>
              <p className={styles.contente_paragraph_normal}>
                Os dados pessoais do usuário e visitante recolhidos são os seguintes:
              </p>
              <ul className={styles.paragraph_ul_normal}>
                <li className={styles.ul_normal_li_bottom}>
                  <strong>Dados para otimização da navegação: </strong>acesso a páginas, 
                  palavras-chave utilizadas na busca e recomendações.
                </li>
                <li className={styles.ul_normal_li}>
                  <strong>Dados para recursos de aleta e histórico: </strong>produtos de interesse por meio de alertas e histórico de navegação.
                </li>
              </ul>
              <h3>4. Para que finalidade utilizamos os dados pessoais do usuário e visitante?</h3>
              <p className={styles.contente_paragraph_normal}>
                Os dados pessoais do usuário e do visitante coletados e armazenados pela 
                plataforma Busk!á.com tem por finalidade:
              </p>
              <ul className={styles.paragraph_ul_normal}>
                <li className={styles.ul_normal_li}>
                  <strong>Bem-estar do usuário e visitante: </strong>aprimorar o serviço oferecido, facilitar, agilizar e cumprir 
                  os compromissos estabelecidos entre o usuário e a plataforma, melhorar a experiência dos 
                  usuários e fornecer funcionalidades específicas a depender das características básicas do usuário.
                </li>
              </ul>
              <p className={styles.contente_paragraph_normal}>
                O tratamento de dados pessoais para finalidades não previstas nesta Política de Privacidade somente 
                ocorrerá mediante comunicação prévia ao usuário, 
                de modo que os direitos e obrigações aqui previstos permanecem aplicáveis.
              </p>
              <h3>5. Por quanto tempo os dados ficam armazenados?</h3>
              <p className={styles.contente_paragraph_normal}>
                Os dados pessoais do usuário e visitante são armazenados pela plataforma durante o período necessário 
                para a prestação do serviço ou o cumprimento das finalidades previstas no presente documento, conforme 
                o disposto no<strong> inciso I do artigo 15 da Lei 13.709/18</strong>.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Os dados podem ser removidos ou anonimizados a pedido do usuário, excetuando os casos em que 
                a lei oferecer outro tratamento.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Ainda, os dados pessoais dos usuários apenas podem ser conservados após o término de seu tratamento 
                nas seguintes hipóteses previstas no<strong> artigo 16 da referida lei</strong>:
              </p>
              <ul className={styles.paragraph_ul_topics}>
                <li className={styles.ul_topics_li}>
                  I - cumprimento de obrigação legal ou regulatória pelo controlador;
                </li>
                <li className={styles.ul_topics_li}>
                  II - estudo por órgão de pesquisa, garantida, sempre que possível, 
                  a anonimização dos dados pessoais;
                </li>
                <li className={styles.ul_topics_li}>
                  III - transferência a terceiro, desde que respeitados os requisitos 
                  de tratamento de dados dispostos nesta Lei;
                </li>
                <li className={styles.ul_topics_li}>
                  IV - uso exclusivo do controlador, vedado seu acesso por terceiro, 
                  e desde que anonimizados os dados.
                </li>
              </ul>
              <h3>6. Segurança dos dados pessoais armazenados</h3>
              <p className={styles.contente_paragraph_normal}>
                A plataforma se compromete a aplicar as medidas técnicas e organizativas aptas a proteger os dados 
                pessoais de acessos não autorizados e de situações de destruição, perda, 
                alteração, comunicação ou difusão de tais dados.
              </p>
              <p className={styles.contente_paragraph_normal}>
                A plataforma não se exime de responsabilidade por culpa exclusiva de terceiro, como em caso de ataque 
                de hackers ou crackers, ou culpa exclusiva do usuário, como no caso em que ele mesmo transfere 
                seus dados a terceiros. O site se compromete a comunicar o usuário em caso de alguma violação de 
                segurança dos seus dados pessoais.
              </p>
              <h3>7. Os dados pessoais armazenados serão transferidos a terceiros?</h3>
              <p className={styles.contente_paragraph_normal}>
                Os dados pessoais não podem ser compartilhados com terceiros.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Ao ser redirecionado para um aplicativo ou site de terceiros, você não será mais regido por essa Política
                de Privacidade ou pelos Termos de Serviço da nossa plataforma. Não somos responsáveis pelas práticas de 
                privacidade de outros sites e lhe incentivamos a ler as declarações de privacidade deles.
              </p>
              <h3>8. Cookies ou dados de navegação</h3>
              <p className={styles.contente_paragraph_normal}>
                Os Cookies referem-se à arquivos de texto enviados pela plataforma ao computador do usuário e visitante e 
                que nele ficam armazenados, com informações relacionadas à navegação no site. Tais informações são 
                relacionadas aos dados de acesso como local e horário de acesso e são armazenadas pelo navegador do usuário 
                e visitante para que o servidor da plataforma possa lê-las 
                posteriormente a fim de personalizar os serviços da plataforma.
              </p>
              <p className={styles.contente_paragraph_normal}>
                O usuário e o visitante da plataforma Busk!á.com manifesta conhecer e aceitar que pode ser utilizado um sistema 
                de coleta de dados de navegação mediante à utilização de Cookies.
              </p>
              <p className={styles.contente_paragraph_normal}>
                O Cookie persistente permanece no disco rígido do usuário e visitante depois que o navegador é fechado e será 
                usado pelo navegador em visitas subsequentes ao site. Os Cookies persistentes podem ser removidos seguindo as 
                instruções do seu navegador. É possível redefinir seu navegador da web para recusar todos os Cookies, 
                porém alguns recursos da plataforma podem não funcionar corretamente se a 
                capacidade de aceitar Cookies estiver desabilitada.
              </p>
              <h3>9. Consentimento</h3>
              <p className={styles.contente_paragraph_normal}>
                Ao utilizar os serviços e fornecer as informações pessoais na plataforma, o usuário está consentindo com a 
                presente Política de Privacidade.
              </p>
              <p className={styles.contente_paragraph_normal}>
                O usuário, ao usar o site Busk!á.com, manifesta conhecer e pode exercitar seus direitos de cancelar sua confirmação 
                de Cookies e aceitamento de qualquer outro recurso, acessar e atualizar seus dados pessoais e garantir a veracidade das informações por ele disponibilizadas.
              </p>
              <p className={styles.contente_paragraph_normal}>
                O usuário tem direito de retirar o seu consentimento a qualquer tempo, para tanto deve entrar em contato por meio 
                do e-mail<strong> busklaoficial@zohomail.com</strong>.
              </p>
              <h3>10. Alterações para essa política de privacidade</h3>
              <p className={styles.contente_paragraph_normal}>
                Reservamos o direito de modificar essa Política de Privacidade a qualquer momento, então, é recomendável que o 
                usuário e visitante revise-a com frequência.
              </p>
              <p className={styles.contente_paragraph_normal}>
                As alterações e esclarecimentos vão surtir efeito imediatamente após sua publicação na plataforma. Quando realizadas 
                alterações os usuários serão notificados. Ao utilizar o serviço ou fornecer informações pessoais após eventuais 
                modificações, o usuário e visitante demonstra sua concordância com as novas normas.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Diante da fusão ou venda da plataforma à outra empresa os dados dos usuários podem ser transferidos para os novos 
                proprietários para a permanência dos serviços oferecidos.
              </p>
              <h3>11. Jurisdição para resolução de conflitos</h3>
              <p className={styles.contente_paragraph_normal}>
                Para a solução de controvérsias decorrentes do presente instrumento será aplicado integralmente o Direito brasileiro.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Os eventuais litígios deverão ser apresentados no foro da comarca de 
                <strong> Pelotas/RS</strong>, número <strong>022</strong>.
              </p>
            </article> 
          </section>
        </main>
        <FooterGoUp />
      </div>}
    </> 
  );
};

export default Privacidade;