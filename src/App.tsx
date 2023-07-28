import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";
import { ShopContent } from "./pages/Shop/ShopContent";
import { AboutContent } from "./pages/About/AboutContent";
import { ContactContent } from "./pages/Contact/ContactContent";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import { BookDetails } from "./components/ShopContent/BookDetails/BookDetails";
import { ShoppingCartProvider } from "./components/context/CartContext";
import { OrderFinish } from "./pages/OrderFinish/OrderFinish";

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
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header isDesktop={isDesktop} />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="shop" element={<ShopContent />} />
          <Route
            path="shop/:bookId"
            element={<BookDetails isDesktop={isDesktop} />}
          />
          <Route path="order-finish" element={<OrderFinish />} />
          <Route path="about" element={<AboutContent />} />
          <Route path="contact" element={<ContactContent />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
