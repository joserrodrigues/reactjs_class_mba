import React, { useState, useEffect, useRef } from "react";
import CustomLabel from "../../Components/CustomLabel/CustomLabel";
import { useGetRandom } from "../../Components/useGetRandom/useGetRandom";
import "./Home.css";

const Home = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  //Esse useEffect é invocado sempre que há uma renderização do componente
  useEffect(() => {
    console.log("Executa na renderização do componente");
    return () => {
      console.log("Executa antes de realizar a renderização");
    };
  });

  //Esse useEffect é invocado sempre que o componente é montado
  useEffect(() => {
    console.log("Executa na montagem do componente");
    return () => {
      //Aqui ele é executado na desmontagem do componente
      console.log("Executa na desmontagem do componente");
    };
  }, []);

  //Esse useEffect é invocado sempre que o valor do count é alterado
  useEffect(() => {
    console.log("Executa na alteração do information");
    return () => {
      console.log(
        "Executa antes de executar o render ao alterar o valor do information"
      );
    };
  }, [count]);

  const infoRandom = useGetRandom();
  return (
    <div className="container">
      <CustomLabel info={count} />
      <input ref={inputRef} title="teste" />
      {infoRandom}
      <p></p>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Add Count
      </button>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Set Focus
      </button>
    </div>
  );
};

export default Home;
