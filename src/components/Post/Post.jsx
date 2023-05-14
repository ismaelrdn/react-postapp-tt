import { deletePost } from "../../redux/posts/posts.actions";
import Button from "../Button/button";
import "./Post.css";
import React from "react";

//Nos traemos las props de post y las pintamos.
// En el botón, al hacer click llamomos a la función deletePost pasándole el id del post para eliminarlo.

const Post = ({ post }) => {
  return (
    <div className="post">
      <h4 className="post-title">{post.title}</h4>
      <p className="post-body">{post.body}</p>
      <Button funcion={() => deletePost(post.id)}>ELIMINAR</Button>
    </div>
  );
};

export default Post;
