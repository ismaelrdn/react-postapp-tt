import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import Post from "../../components/Post/Post";
import Loading from "../../components/Loading/loading";

//creamos el componente Home que va a ser la página/routa principal a la que nos vamos a traer todos los posts

const Home = () => {
  //con destructuring nos traemos los posts y sus propiedades y con useSelector de redux podemos ir viendo el estado actualizado de los posts. En nuestro caso, poder traernos los posts.

  const { posts, loading } = useSelector((state) => state.posts);

  //Llaamos al componente Loading que no se ve nunca porque la web vuela y se trae los posts correctamente.
  //Luego, cuando traemos los posts (que comprobamos sabiendo que hay más de 1), los mapeamos y pintamos.
  //Para pintarlos lo hemos componetizado en Post (ver Post.jsx)

  return (
    <div className="home">
      {loading && <Loading />}
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
    </div>
  );
};

export default Home;
