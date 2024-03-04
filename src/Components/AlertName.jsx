import styles from "./AlertName.module.css";
import { useState } from "react";

const AlertName = ({item, handleDelete}) => {
    
    const [editingStatus, setEditingStatus] = useState(false);
    const [timePrice, setTimePrice] = useState("");
    const [newprice, setNewPrice] = useState("");
    const [validValue, setValidValue] = useState(0);

  //  console.log('item', item.id);

    // const [saveOption, setSaveOption] = (false); validValue

    const handleSolEdit = () => {
      // console.log('sumir edicao erro...')
      // console.log('ValidValue...', validValue)
      //   console.log('bom dia')
        setValidValue(0);

        // console.log('ValidValue pos...', validValue)
    };

    const handleNewName = (e) => {
        setNewPrice(e.target.value);
    };

    const handleEdit = () => {
        setEditingStatus(true);
    };

    const handleCannot = () => {
        setEditingStatus(false);
        setValidValue(0);
        setNewPrice("");
    };

    function getFixPrice(a) {
      let getPrice = [];

      let contNum = a.split("").filter((ite) => {
          if (ite === "." || ite === ",") {
              return ite;
          } else {
              getPrice.push(ite);
          };
      });

      if (contNum.length != 0) {
        // console.log("Valor invalido tente outro!")
          //setProblemAlert(4);
          return undefined;
      } else {

          if (getPrice.length === 1 || getPrice.length === 2 || getPrice.length === 3) {

              getPrice.push(",00");

              let joinValue = getPrice.join("");

           //   console.log("joinValue: ", joinValue);
              return joinValue;
          } else if (getPrice.length === 4) {

            //  console.log("valor: ", getPrice)

              getPrice.splice(1, 0, '.');

              getPrice.push(",00");

              let joinValue = getPrice.join("");

             // console.log("getPrice: ", joinValue)
              return joinValue;
          } else if (getPrice.length >= 5) {
              // console.log("Valor muito grande!")
              return "haveError";
          };
      };
    };

    const handleSave = (e) => {
        e.preventDefault();

        // console.log("item.item.valuation: ", item.valuation);

        let correctPrice = getFixPrice(newprice);

      if (validValue != "notNow") {
        // console.log('valid < 1')
        if (newprice === "" && validValue < 1) {
          setValidValue(1)
          // console.log('setando valid para 1 ...')
        } else if (item.valuation === correctPrice && validValue < 1) {
          setValidValue(2)
          // console.log('setando valid para 2 ...')
        } else if (newprice < 1 && validValue < 1) {
          setValidValue(3);
          // console.log('setando valid para 3 ...')
        } if (correctPrice === undefined) {
          // console.log("problema detectado ...")
          setValidValue(4);
        } else if (correctPrice === "haveError") {
          // console.log("problema com maximo de valor ...")
          setValidValue(5);
        } else {
          // console.log('setando nao 1 2 e 3...')
          function getCookie(name) {
            let cookie = {};
            document.cookie.split(';').forEach(function (el) {
              let [k, v] = el.split('=');
              cookie[k.trim()] = v;
            });

            return cookie[name];
          };
          const myCookieName = getCookie(`alert${item.id}`);

          let correctPrice = getFixPrice(newprice);

          let toArrayCookie = myCookieName.split(" ");

          // console.log("Antes: ", toArrayCookie);

          // console.log("O valor novo: ", correctPrice);

          toArrayCookie.pop(toArrayCookie[toArrayCookie.length - 1])

          // console.log("Como fica no final: ", toArrayCookie[0], toArrayCookie[1],correctPrice)

          document.cookie = `alert${item.id}=${toArrayCookie[0]} ${toArrayCookie[1]} ${correctPrice};expires=Mon, 4 Feb 2030 12:59:59 GMT;path=/;SameSite=Lax`;

          setEditingStatus(false);

          setValidValue("notNow");

          setTimePrice(correctPrice);

          setNewPrice("");
        };
      };
       
    };

    // console.log("Validvalue: ", validValue);

    return (
        <>
            <div className={styles.container_list}>
                <div className={styles.list_product}>
                    <div className={styles.product_delete_box}>
                        <button onClick={() => handleDelete(item.id)}>
                            <i className="gg-trash"></i>
                        </button>
                    </div>
                    <div className={styles.product_name_box}>
                        <div className={styles.name_box}>
                            <p>{item.word}</p>
                        </div>
                    </div>
                    <div className={styles.product_price_box}>
                        <div className={styles.price_box_now}>
                            <p>Preço atual:</p>
                            <div className={styles.price_box}>
                                {timePrice != "" && <p>R$ {timePrice}</p>}
                                {timePrice === "" && <p>R$ {item.valuation}</p>}
                            </div>
                        </div>
                        {editingStatus && 
                <form
                  onSubmit={handleSave}
                >
                  {validValue === 1 && <p className={styles.p_problem}>Informe um valor para salvar.</p>}
                  {validValue === 2 && <p className={styles.p_problem}>Informe um valor diferente do atual.</p>}
                  {validValue === 3 && <p className={styles.p_problem}>Deve ser de R$ 1,00 o valor mínimo.</p>}
                  {validValue === 4 && <p className={styles.p_problem}>Não é permitido usar vírgula ou ponto.</p>}
                  {validValue === 5 && <p className={styles.p_problem}>O valor máximo aceito é 9.999,00 reais.</p>}
                  <label>
                    Novo preço:
                    <input
                      type="number"
                      placeholder="Novo preço"
                      name="Campo de novo preço"
                      autoComplete="off"
                      value={newprice}
                      onChange={handleNewName}
                      onClick={handleSolEdit}
                    />
                  </label>   
                </form>
                        }
                        <div className={styles.price_box_button}>
                            {!editingStatus && 
                              <button 
                                className={styles.button_edit}
                                onClick={handleEdit} 
                              >
                                Editar
                              </button>
                            }
                            {editingStatus && 
                              <button 
                                className={styles.button_cannot}
                                onClick={handleCannot}
                              >
                                Cancelar
                              </button>
                            }
                            {editingStatus && 
                              <button 
                                type="submit"
                                className={styles.button_save}
                                onClick={handleSave}
                              >
                                Salvar
                              </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlertName;
