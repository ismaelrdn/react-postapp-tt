import React from "react";
import "./Button.css";

//creamos un componente reutilizable en otros componentes de la aplicación, de manera independiente.
//En mi caso lo he usado en en el formulario y en el componente de postear
// En estilos no he creado solamente el estándar pero la idea es que cuando avance en el proyecto
// tener varios tamaños, combinaciones de colores...

const Button = ({
  children = "texto",
  tipo = "high",
  size = "m",
  disabled,
  funcion,
}) => {
  return (
    <button
      onClick={funcion}
      className={`boton ${tipo} ${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
