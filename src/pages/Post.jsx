// src/pages/Post.jsx
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./css/post.css";
import Side from "../components/post/Side";
import Comment from "../components/post/Comment";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + id)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const getStatusColor = () => {
    if (post.status === 'Dead') {
      return 'dead';
    } else if (post.status === 'Alive') {
      return 'alive';
    } else {
      return '';
    }
  };

  return (
    <article className="container">
      <div className="main">
        <div className="header-main card">
          <figure className="post-img">
            <img src={post.image} alt={"Imagem de " + post.name} className="img-fluid" />
          </figure>
          <div className="post-details">
            <h2>{post.name}</h2>
            <div className={`status ${getStatusColor()}`}>
              <div className="circulo-status"></div>
              <p>{post.status}</p>
            </div>
            <p>Specie: {post.species}</p>
            <p>Tipo: {post.type}</p>
            <p>Genero: {post.gender}</p>
            {post.origin && <p>Origem: {post.origin.name}</p>}
            {post.location && <p>Localidade: {post.location.name}</p>}
          </div>
        </div>
        <Side />
      </div>
      <Comment/>
    </article>
  );
}
