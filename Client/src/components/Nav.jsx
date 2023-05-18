import SearchBar from "./carpetaSearch/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = (props) => {
  const { onSearch } = props;

  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <div className={style.container}>
        <SearchBar onSearch={onSearch} />

        <div className={style.containerBtn}>
          <NavLink to={"/about"}>
            <button className={style.btn}>About</button>
          </NavLink>
          <NavLink to={"/home"}>
            <button className={style.btn}>Home</button>
          </NavLink>
          <NavLink to={"/favorites"}>
            <button className={style.btn}>Favorites</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Nav;
