//Autilizamos la herramienta que nos enseñó kiko para crear la store. Rápido, sencillo y para toda la familia. Y con muy poquito código.

import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts/posts.reducer";

export default configureStore({
  //Esto lo utilizamos para combinar los reducer de la store. En este caso solo hay uno. 
  //Se exporta para poder utilizarlo en cualquier parte de la aplicación que estamos haciendo.
  reducer: {
    posts: postsReducer, //para manejar el estado de los posts
  },
});
