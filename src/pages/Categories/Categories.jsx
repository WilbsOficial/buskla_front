import styles from "./Categories.module.css";
import {useState, useEffect, useMemo} from "react";
import {useParams} from "react-router-dom";
import FooterGoUp from "../../Components/FooterGoUp";
import CardCategorie from "../../Components/CardCategorie";
import loadingIcone from '../../assets/Spinner-1s-200px.svg';
import api from "../../Services/api";

const Categories = () => {

  const [ligado, setLigado] = useState(false);
  const {id} = useParams("");
  const [cname, setCname] = useState("");
  const [ckod, setCkod] = useState("");
  const [lista, setLista] = useState([]);

  useEffect(() => {
    if (id === "celulares+e+tabletes") {
      setCname("Celulares e tabletes");
      setCkod("a");
    } else if (id === "computadores") {
      setCname("Computadores")
      setCkod("b");
    } else if (id === "video+games") {
      setCname("Video games")
      setCkod("c");
    } else if (id === "jogos+eletronicos") {
      setCname("Jogos eletrônicos")
      setCkod("d");
    } else if (id === "eletrodomesticos") {
      setCname("Eletrodomésticos")
      setCkod("e");
    } else if (id === "tv+e+audio") {
      setCname("Tv e áudio")
      setCkod("f");
    } else if (id === "casa+e+limpeza") {
      setCname("Casa e limpeza")
      setCkod("g");
    } else if (id === "livros") {
      setCname("Livros")
      setCkod("h");
    } else if (id === "eletronicos+em+geral") {
      setCname("Eletrônicos em geral")
      setCkod("i");
    } else if (id === "construcao+e+ferramentas") {
      setCname("Construção e ferramentas")
      setCkod("j");
    } else if (id === "roupas") {
      setCname("Roupas")
      setCkod("k");
    } else if (id === "produtos+de+beleza") {
      setCname("Produtos de beleza")
      setCkod("l");
    };
  }, [id, cname, ckod]);
 
  useMemo(() => {
    if (ckod !== "") {
      async function createListCategory() {
        await api.post("/categoria", {
          catName: ckod
        })
        .then((res) => {
          setLista(res.data);
          setLigado(true);
        })
        .catch((error) => {
          console.log(error);
        });
      };
  
      createListCategory();
    };
  }, [ckod]);

  const handleReload = () => {  
    async function createListCategory() {
      await api.post("/categoria", {
        catName: ckod
      })
      .then((res) => {
        setLista([]);
        zero(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    createListCategory();
  };

  function zero(upTheList) {
    setLista(upTheList);
  };
 
  return (
    <div className={styles.container_categories}>
      {!ligado && <div className={styles.modal_categorys_loading}>
        <img src={loadingIcone} alt="Carregando..." />
      </div>}
      {ligado && <main className={styles.categories_contente}>
        <header className={styles.box_navbar}>
          <div className={styles.nav_category_title}>
            <h2>{cname}</h2>
          </div>
          <div className={styles.nav_category_reload}>
            <button onClick={handleReload}>Recarregar</button>
          </div>
        </header>
        <section className={styles.box_list}>
          {lista && lista.map((data) => (
            <CardCategorie key={data._id} item={data} />
          ))}
        </section>
      </main>}
      {ligado && <FooterGoUp />}
    </div>
  );
};

export default Categories;