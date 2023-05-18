import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useEffect, useState } from "react";

function Card(props) {
  const {
    id,
    name,
    gender,
    species,
    image,
    status,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className={style.containerCard}>
        <div className={style.front}>
          <img src={image} alt={name} className={style.image} />
        </div>

        <div className={style.back}>
          <button className={style.btn} onClick={() => onClose(id)}>
            X
          </button>
          <Link to={`/detail/${id}`}>
            <h2 className={style.text}>Name: {name}</h2>
          </Link>
          <h2 className={style.text}>Specie: {species}</h2>

          <h2 className={style.text}>Gender: {gender}</h2>

          <h2 className={style.text}>Status: {status}</h2>

          <h2 className={style.text}>Origin: {props.origin}</h2>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
