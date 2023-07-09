import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { HomeContent } from "./components/HomeContent/HomeContent";
import { ShopContent } from "./components/ShopContent/ShopContent";
import { AboutContent } from "./components/AboutContent/AboutContent";
import { ContactContent } from "./components/ContactContent/ContactContent";
import "./App.css";
import { BookDetails } from "./components/ShopContent/BookDetails/BookDetails";


export const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 820);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header isDesktop={isDesktop}/>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="shop" element={<ShopContent />} />
        <Route path="shop/:bookId" element={<BookDetails isDesktop={isDesktop}/>} />
        <Route path="about" element={<AboutContent />} />
        <Route path="contact" element={<ContactContent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
