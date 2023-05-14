import axios from "axios";

//Utilizamos axios para generar nuestra Api y exportamos funcion de axios para reutilizar peticiones

export const APIHeaders = {
  Accept: "application/json",
  "Content-type": "application/json",
  "Acces-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: APIHeaders,
});
