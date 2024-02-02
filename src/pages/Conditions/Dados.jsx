import styles from './Dados.module.css';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'; 
import FooterGoUp from '../../Components/FooterGoUp';
import loadingIcone from '../../assets/Spinner-1s-200px.svg';

const Dados = () => {

  const [ligado, setLigado] = useState(false);
  const [menu, setMenu] = useState(false);

  const explorer = "https://support.microsoft.com/pt-br/windows/excluir-e-gerenciar-cookies-168dab11-0753-043d-7c16-ede5947fc64d";
  const firefox = "https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s";
  const safari = "https://support.apple.com/pt-br/guide/safari/sfri11471/mac";
  const chrome = "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&oco=1&hl=pt-BR";
  const edge = "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09";
  const opera = "https://help.opera.com/en/latest/web-preferences/#cookies";

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
      {!ligado && <div className={styles.modal_dados_loading}>
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
                className={styles.link_button_thr}
                to="/uso"
              >Condições de uso</Link>
              <Link 
                className={styles.btn_activated}
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
                    to="/uso"
                  >Condições de uso</Link>
                </li>
                <li className={styles.links_ul_normal}>
                  <Link
                    onClick={handleLessMenu}
                  >Cookies</Link>
                </li>
              </ul>
            </nav>
          </aside>
        }
        <main className={styles.box_condition_text}>
          <header className={styles.text_title}>
            <div className={styles.title_marge}>
              <h2>Cookies</h2>
            </div>
          </header>
          <section className={styles.condition_text}>
            <article className={styles.text_contente}>
              <h3>1. O que são Cookies?</h3>
              <p className={styles.contente_paragraph_normal}>
                Cookies são pequenos arquivos de texto ou fragmentos de informação que são baixados em seu computador, 
                smartphone ou qualquer outro dispositivo com acesso à internet quando você visita um site.
              </p>
              <p className={styles.contente_paragraph_normal}>
                De modo que, os Cookies guardam informações sobre a sua navegação nas páginas do site e retêm apenas 
                informações relacionadas a suas preferências.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Assim, o site que você visita consegue armazenar e recuperar os dados sobre os seus hábitos de navegação, 
                de forma a melhorar a experiência de uso, por exemplo. É importante frisar que eles não contêm informações 
                pessoais específicas, como dados sensíveis ou bancários.
              </p>
              <h3>2. Como gerenciar os Cookies</h3>
              <p className={styles.contente_paragraph_normal}>
                A instalação dos Cookies está sujeita ao seu consentimento. Apesar da maioria dos navegadores estar 
                inicialmente configurada para aceitar Cookies de forma automática, você pode rever suas permissões a qualquer 
                momento, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns 
                Cookies forem enviados ao seu dispositivo. 
              </p>
              <p className={styles.contente_paragraph_normal}>
                Atualmente, na primeira vez em que você acessa nossa aplicação, será requerida a sua concordância com a 
                instalação destes. Apenas após a sua aceitação eles serão ativados.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Para tanto, o Busk!á.com utiliza um sistema de banner de alerta em sua página inicial. Dessa maneira, não apenas 
                solicitamos sua concordância, mas também informamos que a navegação continuada em nosso site será entendida 
                como consentimento. 
              </p>
              <p className={styles.contente_paragraph_normal}>
                Como já dito, você pode, a qualquer momento e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. 
                Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns 
                recursos da plataforma.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Para gerenciar os Cookies do seu navegador, basta fazê-lo diretamente nas configurações do navegador, 
                na área de gestão de Cookies.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Você pode acessar tutoriais sobre o tema diretamente nos links abaixo:
              </p>
              <ul>
                <li className={styles.ul_normal_li}>
                  Se você está usando o 
                  <Link to={explorer} target="_blank">Internet Explorer</Link>.
                </li>
                <li className={styles.ul_normal_li}>
                  Se você está usando o
                  <Link to={firefox} target="_blank">Firefox</Link>.
                </li>
                <li className={styles.ul_normal_li}>
                  Se você está usando o  
                  <Link to={safari} target="_blank" >Safari</Link>.
                </li>
                <li className={styles.ul_normal_li}>
                  Se você está usando o 
                  <Link to={chrome} target="_blank">Google Chrome</Link>.
                </li>
                <li className={styles.ul_normal_li}>
                  Se você está usando o 
                  <Link to={edge} target="_blank">Microsoft Edge</Link>.
                </li>
                <li className={styles.ul_normal_li}>
                  Se você está usando o 
                  <Link to={opera} target="_blank">Opera</Link>.
                </li>
              </ul>
              <h3>3. Por que usamos Cookies?</h3>
              <p className={styles.contente_paragraph_normal}>
                O Busk!á.com utiliza Cookies para fornecer a melhor experiência de uso, com o intuito de tornar nossa 
                aplicação mais fácil e personalizada, tendo por base suas escolhas e comportamento de navegação.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Assim, buscamos entender como você utiliza nossa aplicação e ajustar o conteúdo para torná-lo 
                mais relevante para você, além de lembrar de suas preferências.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Os Cookies participam deste processo enquanto armazenam, leem e executam os dados necessários 
                para cumprir com o nosso objetivo.
              </p>
              <h3>4. Quais tipos de Cookies usamos</h3>
              <p className={styles.contente_paragraph_normal}>
                O nosso site em sua versão atual, utiliza apenas uma categoria de Cookies, a qual descrevemos 
                no texto abaixo.
              </p>
              <p className={styles.contente_paragraph_normal}>
                <strong>Cookies persistentes ou permanentes</strong>: são Cookies que permanecem no seu 
                dispositivo durante um período determinado ou até que você os exclua.
              </p>
              <p className={styles.contente_paragraph_normal}>
                Abaixo listamos todos os Cookies que utilizamos em nosso site, bem como detalhes sobre finalidade 
                e período de duração, o qual vale lembrar que é persistente, ou seja, não são deletados toda vez 
                que você fecha o site, de modo que continuam salvos até uma data de expiração ser atingida ou até 
                quando você os excluir manualmente de seu navegador.
              </p>
              <table border="1">
                <thead>
                  <tr>
                    <td className={styles.table_td_center}>Cookie</td>
                    <td className={styles.table_td_center}>Validade</td>
                    <td className={styles.table_td_center}>Finalidade</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.table_td_contente}>concordo</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>Guarda a decisão (sim ou não) da permisão para usar Cookies</td>
                  </tr>
                  <tr>
                    <td className={styles.table_td_contente}>ktone</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>Guarda palavra-chave digitada na busca</td>
                  </tr>
                  <tr>
                    <td className={styles.table_td_contente}>kttwo</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>Guarda palavra-chave digitada na busca</td>
                  </tr>
                  <tr>
                    <td className={styles.table_td_contente}>ktthr</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>Guarda palavra-chave digitada na busca</td>
                  </tr>
                  <tr>
                    <td className={styles.table_td_contente}>kt1copy</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>
                      Verificar a existencia de ktone, 
                      exclui-lo e o atualizar com nova palavra-chave
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.table_td_contente}>kt2copy</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>
                      Verificar a existencia de kttwo, 
                      exclui-lo e o atualizar com nova palavra-chave
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.table_td_contente}>kt3copy</td>
                    <td className={styles.table_td_contente}>Cookie Persistente, expira em 3 meses</td>
                    <td className={styles.table_td_contente}>
                      Verificar a existencia de ktthr, 
                      exclui-lo e o atualizar com nova palavra-chave
                    </td>
                  </tr>
                </tbody>
              </table>  
            </article>  
          </section>
        </main>
        <FooterGoUp />
      </div>}
    </>
  );
};

export default Dados;