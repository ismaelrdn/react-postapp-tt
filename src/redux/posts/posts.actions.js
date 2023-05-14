import { API } from "../../shared/Api.js"; //importamos la API para poder trabajar con ella gracias a axios y poder, por ejemplo, realizar solicitudes.
import store from "../store.js";
import { v4 as uuidv4 } from "uuid";

const { dispatch } = store; //lo importamos para poder realizar las siguientes acciones:

const getAllPosts = async () => {
  dispatch({ type: "LOADING" });

  //hacemos una solicitud (asíncrona) y enviamos el contenido(payload) a la store para que pueda
  //actualizar su estado trayendo todos los posto que recuperamos de API

  const resultado = await API.get("posts");

  dispatch({
    type: "GET_POSTS",
    contenido: resultado.data,
  });
};

//aquí actualizamos el estado de la store, que ya contiene los posts traídos de la API agregando el post que enviamos
//desde el formulario.

const sendPost = (newPost, posts) => {
  dispatch({ type: "LOADING" });

  //mockeamos el id y el idUser

  // newPost.id = posts.length +1; // lo he hecho como vimos en clase pero esto puede dar un error,
  //por ejemplo: si eliminamos los 3 primeros post la longitud baja a 97 pero el id de los últimos posts es 100, esrto haría que se reptiese un id.
  newPost.idUser = 11;
  newPost.id = uuidv4(); // al final he encontrato una nueva librería que me mockea el id de manera que no se me repiten.

  dispatch({
    type: "SEND_POST",
    contenido: newPost,
  });
};

//esta acción elimina un post, lo hacemos (como se puede ver en el reducer) actualizando la store visualizando los posts que no han sido eliminados.

const deletePost = (postId) => {
  dispatch({ type: "LOADING" });

  dispatch({
    type: "DELETE_POST",
    contenido: postId,
  });
};

export { getAllPosts, sendPost, deletePost };
