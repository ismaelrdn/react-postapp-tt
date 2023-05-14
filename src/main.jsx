import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
/*Utilizamos BrouserRouter para poder generar las rutas posterirmente en App, pero aquí englobamos a toda la App. Asimismo, le modificamos el nombre a Router, lo bueno si es breve, dos veces bueno. */
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

/* para poder usar Router tenemos que englobar toda la App y, al mismo tiempo, englobas App dentro del provider Store para que tenga acceso al store */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
