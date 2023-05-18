import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  let [id, setId] = useState("");

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      props.onSearch(id);
    }
  };

  const handleChange = (evento) => {
    setId(evento.target.value);
  };

  return (
    <div className={style.containerSearch}>
      <div className={style.containerInput}>
        <input
          type="search"
          className={style.input}
          onKeyUp={handleEnter}
          onChange={handleChange}
          value={id}
        />

        <button onClick={() => props.onSearch(id)} className={style.btn}>
          Agregar
        </button>
      </div>
    </div>
  );
}
