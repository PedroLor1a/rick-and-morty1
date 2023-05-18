import { useState } from "react";
import validation from "./validation";
import style from "./Form.module.css";

const Form = (props) => {
  const { login } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [evento.target.name]: evento.target.value,
      })
    );
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(userData);
  };

  return (
    <div className={style.body}>
      <form onSubmit={handleSubmit} className={style.container}>
        <div class={style.brandlogo}></div>
        <div className={style.brandtitle}>Rick and Morty</div>
        <div className={style.inputs}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={style.input}></input>
          {errors.email ? (
            <p style={{ color: "red" }} className={style.error}>
              {errors.email}
            </p>
          ) : errors.emailVacio ? (
            <p style={{ color: "red" }} className={style.error}>
              {errors.emailVacio}
            </p>
          ) : errors.validEmail ? (
            <p style={{ color: "red" }} className={style.error}>
              {errors.validEmail}
            </p>
          ) : (
            <p style={{ color: "red" }} className={style.error}>
              {errors.caracteres}
            </p>
          )}

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password..."
              name="password"
              value={userData.password}
              onChange={handleChange}
              className={style.input}></input>
            {errors.password ? (
              <p style={{ color: "red" }} className={style.error}>
                {errors.password}
              </p>
            ) : errors.incorrectPass ? (
              <p style={{ color: "red" }} className={style.error}>
                {" "}
                {errors.incorrectPass}{" "}
              </p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className={style.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
