import { connect } from "react-redux";

import Card from "../carpetaCard/Card";

const Favorites = ({ myFavorites, onClose }) => {
  return (
    <>
      <h1>My Favorites</h1>

      {myFavorites?.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            status={character.status}
            image={character.image}
            onClose={character.onClose}
          />
        );
      })}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
