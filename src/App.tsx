import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { NoMatch } from "./components/NoMatch/NoMatch";
import "./App.css";
import { HomeContent } from "./components/HomeContent/HomeContent";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
