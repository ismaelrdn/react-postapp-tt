import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NavBar from "./components/Nav/NavBar";
import { useEffect } from "react";
import { getAllPosts } from "./redux/posts/posts.actions";
import FormPost from "./pages/FormPost/FormPost";

//Llamos a la función de la Api en App en lugar de en Home para que solo se haga una vez al lanzar la App.

function App() {
  useEffect(() => {
    getAllPosts();
  }, []);

  //Navbar fuera de Routes porque se va a visualizar siemrpe
  //Dentro de Routes indimamos el nombre de la routa para esos componentes. Es decir, cada ruta te va a mostrar un coomponente.

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPost />} />
      </Routes>
    </>
  );
}

export default App;
