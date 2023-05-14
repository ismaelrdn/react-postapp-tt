import React, { useState } from "react";
import "./FormPost.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { sendPost } from "../../redux/posts/posts.actions";
import Button from "../../components/Button/button";

//Para crear el formulario usamos la librería react-hook-form
const FormPost = () => {
  const [showErrors, setShowErrors] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); //nos permiter lanzar la info del formulario con handleSubmit
  const { posts } = useSelector((state) => state.posts);

  const handleBlur = () => {
    setShowErrors(true); // Cuando un campo pierde el foco, mostramos los errores
  };

  //Ahora vamos a usar la función reset de react-hook-form para que cuando
  //realizamos el submit se limpien los campos de los input
  const resetForm = () => {
    setShowErrors(false);
    document.getElementById("form-post").reset();
  };

  //creamos los campos del formulario al que le hemos puesto ciertas condiciones y muestra de texto en caso de no cumplir (error)
  // Por ejempli, a modo twitter hemos limitado los caracteres de los input
  return (
    <div className="form-container">
      <h2>POSTEA AQUÍ</h2>
      <form
        id="form-post"
        onSubmit={handleSubmit((newPost) => {
          sendPost(newPost, posts);
          resetForm();
        })}
      >
        <label> Asunto
          <input type="text" {...register("title", { required: true, maxLength: 30 })} onBlur={handleBlur}></input>
          {showErrors && errors.title?.type === "required" && (
            <p>Debes completar este campo</p>
          )}
        </label>
        <label> Comentario
          <input type="textarea" {...register("body", { required: true, maxLength: 140 })} onBlur={handleBlur}></input>
          {showErrors && errors.body?.type === "required" && (
            <p>Debes completar este campo</p>
          )}
        </label>
        <Button type="submit">POSTEAR</Button>
      </form>
    </div>
  );
};

export default FormPost;
