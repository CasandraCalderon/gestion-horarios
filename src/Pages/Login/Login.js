import React, { useState } from "react";
import "./Login.css";
import Input from "./Components/Imput/Input";
import Label from "./Components/Label/Label";
import Title from "./Components/Tittle/Title";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPaswword] = useState("");

  //Controlar errores
  const [passwordError, setPaswwordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handlerChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    } else {
      if (isNaN(value)) {
        setPaswwordError(true);
      } else {
        setPaswwordError(false);
        setPaswword(value);
      }
    }
  }
  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "Angie" && param.password === "1234") {
        setIsLogin(true);
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("accont", account);
        setHasError(false);
        console.log(isLogin);
      } else {
        setIsLogin(false);
        console.log(isLogin);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      console.log(isLogin);
      setHasError(true);
    }
  }

  function handlerSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }

  return (
    <div>
      <div>
        <Title text="INICIAR SESION" />
        {hasError && (
          <label className="label-alert">
            {" "}
            Usuario o contraseña incorrector
          </label>
        )}

        <Label text="Usuario" />
        <Input
          atribute={{
            id: "usuario",
            name: "usuario",
            type: "text",
            placeholder: "Ingrese su usuario",
          }}
          handlerChange={handlerChange}
        />
        <Label text="Contraseña" />
        <Input
          atribute={{
            id: "contraseña",
            name: "contraseña",
            type: "password",
            placeholder: "Ingrese su contraseña",
          }}
          handlerChange={handlerChange}
          param={passwordError}
        />
        {passwordError && (
          <label className="label-error">
            Contraseña invalida o incorrecta
          </label>
        )}
        <div>
          <button onClick={handlerSubmit}>INGRESAR</button>
        </div>
      </div>
    </div>
  );
};
export default Login;
