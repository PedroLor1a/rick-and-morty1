let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const nuevosFavs = myFavorites.filter((char) => {
    return char.id !== id;
  });
  myFavorites = nuevosFavs;
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
