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
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="shop" element={<ShopContent />} />
        <Route path="shop/:bookId" element={<BookDetails />} />
        <Route path="about" element={<AboutContent />} />
        <Route path="contact" element={<ContactContent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
