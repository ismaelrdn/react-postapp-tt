import React from "react";
import "./Loading.css";

//Componetizamos el Loading. Lástima que no se lleguen a ver los gif

const Loading = ({ width = "50%", tipo = "AdventureTime" }) => {
  return (
    <img
      style={{ width: width }}
      src={
        tipo === "coche"
          ? "https://tenor.com/es/view/finn-faces-adventure-time-mixed-emotions-making-faces-gif-12569850"
          : "https://giphy.com/gifs/bennebockshecker-bbgiph-decentdisapproval-PkoBC2GlkLJ5yFIWtf"
      }
    />
  );
};

export default Loading;
