// src/components/BlogPost.jsx

import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import "./css/blogpost.css";

const BlogPost = ({ page }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`); // Correção aqui
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      const nextPage = page + 1;
      axios.get(`https://rickandmortyapi.com/api/character?page=${nextPage}`)
        .then(response => {
          const newCharacters = response.data.results;
          setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
        })
        .catch(error => console.error('Error fetching characters:', error));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [characters]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container-card'>
      <h1>Characters</h1>
      <ul className='container'>
        {characters.map(character => (
          <Link to={"/post/" + character.id} key={character.id}>
            <li className='caracterCard'>
              <article>
                <figure className='caracterCard-img'>
                  <img src={character.image} alt={character.name} />
                </figure>
                <div className='caracterCard-content'>
                  <h3>{character.name}</h3>
                  <p>Status: {character.status}</p>
                  <p>Species: {character.species}</p>
                  <p>Type: {character.type}</p>
                  <p>Gender: {character.gender}</p>
                </div>
              </article>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;