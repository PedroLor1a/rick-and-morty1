import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      <h1 className={style.texth1}>D e t a i l</h1>
      {character ? (
        <div>
          <h2 className={style.text}>Name: {character.name}</h2>
          <h2 className={style.text}>Status: {character.status}</h2>
          <h2 className={style.text}>Specie: {character.species}</h2>
          <h2 className={style.text}>Gender: {character.gender}</h2>
          <h2 className={style.text}>Origin: {character.origin?.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Detail;
