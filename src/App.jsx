import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"
import About from "./pages/About.jsx";
import Post from "./pages/Post.jsx";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/about" element={<About />}/>
          <Route path="/post/:id" element={<Post />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}