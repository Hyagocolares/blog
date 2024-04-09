import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./css/side.css";

const Side = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Obter 4 postagens aleatórias
        const randomIds = Array.from({ length: 4 }, () => Math.floor(Math.random() * 672) + 1); // 672 é o total de personagens na API
        const promises = randomIds.map(id => axios.get(`https://rickandmortyapi.com/api/character/${id}`));
        const responses = await Promise.all(promises);
        const randomPosts = responses.map(response => response.data);
        setPosts(randomPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="sidebar-right">
      <h2>Posts Aleatórios</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <div className="post-card">
                <img src={post.image} alt={post.name} />
                <div className="post-content">
                  <h3>{post.name}</h3>
                  <p>Status: {post.status}</p>
                  <p>Species: {post.species}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
