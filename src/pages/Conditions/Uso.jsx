import styles from './Uso.module.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FooterGoUp from '../../Components/FooterGoUp';
import loadingIcone from '../../assets/Spinner-1s-200px.svg';

const Uso = () => {

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
      {!ligado && <div className={styles.modal_uso_loading}>
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
              className={styles.link_button_two}
              to="/privacidade"
            >Política de privacidade</Link>
            <Link 
              className={styles.btn_activated}
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
                  to="/privacidade"
                >Política de privacidade</Link>
              </li>
              <li className={styles.links_ul_normal}>
                <Link
                  onClick={handleLessMenu}
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
              <h2>Condições de uso</h2>
            </div>
          </header>
          <section className={styles.condition_text}>
          <article className={styles.text_contente}>
            <p className={styles.contente_paragraph_normal}>
              Os serviços do Busk!á.com são fornecidos pela pessoa física com o seguinte 
              <span> nome: William Brum Dos Santos</span>  
              , inscrito no <span> CPF sob o nº ***.***.***-20</span>, titular 
              da propriedade intelectual sobre o website, e demais ativos relacionados à plataforma Busk!á.com.
            </p>
            <h3>1. Do objeto</h3>
            <p className={styles.contente_paragraph_normal}>
              A plataforma visa licenciar o uso de seu website, e demais ativos de propriedade intelectual, 
              fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.
            </p>
            <p className={styles.contente_paragraph_normal}>
              A plataforma caracteriza-se pela prestação do seguinte serviço: comparação de preços de produtos 
              entre grandes lojas que possuam participação digital no varejo Brasileiro.
            </p>
            <h3>2. Da aceitação</h3>
            <p className={styles.contente_paragraph_normal}>
              O presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo 
              indeterminado, entre a plataforma e as pessoas físicas ou jurídicas, usuárias do site.
            </p>
            <p className={styles.contente_paragraph_normal}>
              Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a 
              observá-las, sob o risco de aplicação das penalidades cabíveis.
            </p>
            <p className={styles.contente_paragraph_normal}>
              A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de 
              quaisquer serviços fornecidos pela plataforma. Caso não concorde com as disposições deste 
              instrumento, o usuário não deve utilizá-los.
            </p>
            <h3>3. Do acesso dos usuários</h3>
            <p className={styles.contente_paragraph_normal}>
              Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para 
              permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No 
              entanto, a navegação na plataforma ou em alguma de suas páginas poderá ser interrompida, 
              limitada ou suspensa para atualizações, modificações ou qualquer ação 
              necessária ao seu bom funcionamento.
            </p>
            <h3>4. Do suporte</h3>
            <p className={styles.contente_paragraph_normal}>
              Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá 
              entrar em contato com o suporte, por meio de 
              <strong> busklaoficial@zohomail.com.</strong> 
            </p>
            <p className={styles.contente_paragraph_normal}>
              Este serviço de atendimento ao usuário estará disponível nos seguintes dias e horários: 
            </p>
            <ul className={styles.paragraph_ul_normal}>
              <li className={styles.ul_normal_li}>Segunda-feira, das 7:00 às 19:00 no horário de Brasilia;</li>
              <li className={styles.ul_normal_li}>Terça-feira, das 7:00 às 19:00 no horário de Brasilia;</li>
              <li className={styles.ul_normal_li}>Quarta-feira, das 7:00 às 19:00 no horário de Brasilia;</li>
              <li className={styles.ul_normal_li}>Quinta-feira, das 7:00 às 19:00 no horário de Brasilia;</li>
              <li className={styles.ul_normal_li}>Sexta-feira, das 7:00 às 19:00 no horário de Brasilia;</li>
              <li className={styles.ul_normal_li}>Sábado, das 7:00 às 12:00 no horário de Brasilia.</li>   
            </ul>
            <h3>5. Das responsabilidades</h3>
            <h4 className={styles.contente_subtitle}>
              É de responsabilidade do usuário:
            </h4>
            <ul className={styles.paragraph_ul_topics}>
              <li className={styles.ul_topics_li}>a) defeitos ou vícios técnicos originados no próprio sistema do usuário;</li>
              <li className={styles.ul_topics_li}>b) a correta utilização da plataforma e dos serviços;</li>
              <li className={styles.ul_topics_li}>
                c) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo 
                de Condições Geral de Uso, na respectiva Política de Privacidade e na 
                legislação nacional e internacional.
              </li>  
            </ul>
            <h4 className={styles.contente_subtitle}>
              É de responsabilidade da plataforma Busk!á.com:
            </h4>
            <ul className={styles.paragraph_ul_topics}>
              <li className={styles.ul_topics_li}>a) indicar as características do serviço;</li>
              <li className={styles.ul_topics_li}>
                b) os defeitos e vícios encontrados no serviço, 
                desde que lhe tenha dado causa;
              </li>
              <li className={styles.ul_topics_li}>
                c) as informações que foram por ele divulgadas, sendo que as informações divulgadas 
                por usuários são de inteira responsabilidade dos próprios usuários;
              </li> 
              <li className={styles.ul_topics_li}>
                d) os conteúdos ou atividades ilícitas praticadas através da sua plataforma.
              </li>  
            </ul>
            <h3>6. Dos direitos autorais</h3>
            <p className={styles.contente_paragraph_normal}>
              O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, 
              para acessar e fazer uso da plataforma e dos serviços por ela disponibilizados.
            </p>
            <p className={styles.contente_paragraph_normal}>
              A estrutura do site, a marca Busk!á.com o seu logotipo, layouts do site, design de interface, ilustrações, 
              programas de computador, banco de dados e arquivos de transmissão e quaisquer outras informações e direitos 
              de propriedade intelectual de cunho autoral do portador <span> CPF sob o nº ***.***.***-20</span>, 
              observados os termos da <strong> Lei da Propriedade Industrial (Lei nº 9.279/96)</strong>, 
              <strong> Lei de Direitos Autorais (Lei nº 9.610/98) </strong>
              e <strong> Lei do Software (Lei nº 9.609/98)</strong>, estão devidamente reservados.
            </p>
            <p className={styles.contente_paragraph_normal}>
              Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso não gera qualquer 
              direito de propriedade intelectual ao usuário, exceto pela licença limitada ora concedida.
            </p>
            <p className={styles.contente_paragraph_normal}>
              O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, 
              comercial ou não-comercial. Tais usos consistirão em violação dos direitos de propriedade intelectual do portador 
              <span> CPF sob o nº ***.***.***-20</span>, puníveis nos termos da legislação aplicável.
            </p>
            <h3>7. Da rescisão</h3>
            <p className={styles.contente_paragraph_normal}>
              A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável poderá, sem prévio aviso, 
              ensejar a imediata rescisão unilateral por parte do portador 
              <span> CPF sob o nº ***.***.***-20</span>.
            </p>
            <h3>8. Das alterações</h3>
            <p className={styles.contente_paragraph_normal}>
              Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e a qualquer tempo, por parte 
              de Busk!á.com, para adequar ou modificar os serviços, bem como para atender novas exigências legais. 
              As alterações serão veiculadas pelo site Busk!á.com e o usuário poderá optar por aceitar o novo 
              conteúdo ou por abandonar o uso dos serviços.
            </p>
          </article>  
          </section>
        </main>
        <FooterGoUp />
      </div>}
    </>
  );
};

export default Uso;