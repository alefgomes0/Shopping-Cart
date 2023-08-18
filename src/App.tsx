import "./App.css";
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
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="shop" element={<ShopContent />} />
          <Route
            path="shop/:bookId"
            element={<BookDetails />}
          />
          <Route path="order-finish" element={<OrderFinish />} />
          <Route path="about" element={<AboutContent />} />
          <Route path="contact" element={<ContactContent />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
