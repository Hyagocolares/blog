// src/components/post/Comment.jsx

import React, { useState } from 'react';
import "./css/comment.css";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      const newComment = {
        name: name || 'Usuário Anônimo',
        text: commentText,
        date: new Date().toLocaleString()
      };
      setComments(prevComments => [...prevComments, newComment]);
      setName('');
      setCommentText('');
    }
  };

  return (
    <div className="comment">
      <p>Comentários</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Digite seu comentário..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="single-comment">
            <p>{comment.text}</p>
            <p className="comment-info">
              Enviado por: {comment.name} em {comment.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
