// src/pages/Home.jsx

import { useState } from 'react';

import BlogPost from '../components/BlogPost';
import Pagination from '../components/Pagination';
import "./css/home.css"

function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  return (
    <div>
      <BlogPost page={currentPage} />
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default Home;