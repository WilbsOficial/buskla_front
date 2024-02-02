import {useEffect, useState} from "react";
import api from "../Services/api";

export const useBuskla = (query) => {
  const [arrayF, setArrayF] = useState([]);

  useEffect(() => {
    if (query) {
      function verificWord() {
        const wordValidation = [
          "ps4",
          "ps4 slim",
          "ps4 pro",
          "ps4 fat",
          "playstation 4",
          "playstation 4 fat",
          "playstation 4 slim",
          "playstation 4 pro",
          "console ps4 fat",
          "console ps4 slim",
          "console ps4 pro",
          "nintendo switch",
          "nintendo switch lite",
          "nintendo switch oled",
          "xbox series",
          "xbox series s",
          "xbox series x",
          "ps5",
          "playstation 5"
        ];

        const newWord = wordValidation.map((ite) => {
          if (ite === query.toLowerCase()) {
            let caso = "";

            if (wordValidation.indexOf(ite) < 11) {
              caso = 'Ps4';
            } else if ((wordValidation.indexOf(ite) >= 11) && (wordValidation.indexOf(ite) < 14)) {
              caso = 'NS';
            } else if ((wordValidation.indexOf(ite) >= 14) && (wordValidation.indexOf(ite) < 17)) {
              caso = 'XS';
            } else if ((wordValidation.indexOf(ite) === 17) || (wordValidation.indexOf(ite) === 18)) {
              caso = 'Ps5';
            };

            return caso;
          } else { return false; };
        });

        let getANewWord = newWord.find((ite) => {
          if (ite) {
            return ite;
          } else { return null; };
        });

        return getANewWord;
      };

      const getNewWord = verificWord();

      if (getNewWord !== undefined) {
        createListSearchA();
      } else {
        createListSearchB();
      };

      async function createListSearchA() {
        await api.post("/search", {
          FiltCOfReq: getNewWord,
          word: ""
        })
        .then((res) => {
          busk(res.data);
        })
        .catch((error) => {
          console.log(error);
          setArrayF(false);
        });
      };

      async function createListSearchB() {
        await api.post("/search", {
          FiltCOfReq: "",
          word: query
        })
        .then((res) => {
          busk(res.data);
        })
        .catch((error) => {
          console.log(error);
          setArrayF(false);
        });
      };

      function busk(listOfCards) {
        let myList = [];

        if (listOfCards.length > 0) {
          createMyList(listOfCards);
        };

        function createMyList(listOfCards) {
          const forPrice = listOfCards.sort((a, b) => {
            let dot = a.price.includes('.') ? a.price.replace('.', '') : a.price;
            let vilgNot = dot.includes(',') ? dot.replace(',', '.') : dot;
            let priceA = /\s/g.test(vilgNot) ? vilgNot.trim() : vilgNot;

            let dotB = b.price.includes('.') ? b.price.replace('.', '') : b.price;
            let vilgNotB = dotB.includes(',') ? dotB.replace(',', '.') : dotB;
            let priceB = /\s/g.test(vilgNotB) ? vilgNotB.trim() : vilgNotB;

            if (parseFloat(priceA) < parseFloat(priceB)) {
              return -1;
            } else {
              return true;
            };
          });

          myList.push(forPrice[0]);
          myList.push(forPrice[1]);
          myList.push(forPrice[2]);
          myList.push(forPrice[3]);
          myList.push(forPrice[4]);
          myList.push(forPrice[5]);
          myList.push(forPrice[6]);
          myList.push(forPrice[7]);
          myList.push(forPrice[8]);
          myList.push(forPrice[9]);
          myList.push(forPrice[10]);
          myList.push(forPrice[11]);
          myList.push(forPrice[12]);
          myList.push(forPrice[13]);
          myList.push(forPrice[14]);
        };

        if (myList.length > 0) {
          const selectedList = myList.filter((ite) => {
            if (ite !== undefined) {
              return ite;
            } else {
              return false;
            };
          });
          setArrayF(selectedList);
        } else {
          setArrayF(false);
        };
      };
    }
  }, [query]);
  
  return arrayF;
};