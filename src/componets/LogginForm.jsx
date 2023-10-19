import { useState } from "react";
import "./LogginForm.css";

export default function LogginFrom({ users, setUserAuth }) {

  const [dataForm, setDataForm] = useState({
    email:"",
    password:""
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm())

    if(!error.email && !error.password){
        let userFound = users.find((user)=>(
            user.email.toLowerCase() === dataForm.email.toLowerCase()
        ))
        if (!userFound){
            setError({
                ["user"]:"El susuario no esta registrado"
            })
        }else{
            userFound.password.toLowerCase() === dataForm.password.toLowerCase() ?(setUserAuth(userFound)):
            (setError({["user"]:"La contraseña es incorrecta"}))
        }
    }

  };

  const validateForm = () => {
    let errors = {}
    let valpassword = /^.{1,10}$/
    let valemail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

    if(!dataForm.email.trim()){
        errors.email = "'El correo es requerido'"
    }else if(!valemail.test(dataForm.email.trim())){
        errors.email = "'El correo no es valido'"
    }


    if(!dataForm.password.trim()){
        errors.password = "'La contraseña es requerida'"
    }else if(!valpassword.test(dataForm.password.trim())){
        errors.password = "'La contraseña debe ser de 10 o menos caracteres'"
    }

    return errors
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2>Iniciar sesion</h2>
      <form onSubmit={handleSubmit}>
        <span>{error.user}</span>
        <input
          type="text"
          name="email"
          placeholder="Correo Electronico"
          onChange={handleChange}
        />
        <span>{error.email}</span>
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <span>{error.password}</span>
        <button type="submit">Iniciar sesion</button>
      </form>
    </>
  );
}
