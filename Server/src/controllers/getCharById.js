const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const { status, name, species, gender, origin, image } = (
      await axios(URL + id)
    ).data;

    const character = { id, status, name, species, gender, origin, image };

    return character ? res.json(character) : res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCharById,
};
