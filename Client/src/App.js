import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/carpetaCards/Cards.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  let [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function onSearch(id) {
    try {
      const url = "http://localhost:3001/rickandmorty/character/" + id;

      const { data } = await axios(url);
      const char = characters?.find((e) => e.id === Number(data.id));

      if (char) {
        alert("Already in the list");
      } else if (data.id !== undefined) {
        setCharacters((characters) => [...characters, data]);
      } else {
        alert("Character not found");
      }
    } catch (error) {
      return { error: error.message };
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  const [access, setAccess] = useState(false);
  const EMAIL = "pedroloria003@gmail.com";
  const PASSWORD = "pedro123";

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} setAccess={setAccess} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
