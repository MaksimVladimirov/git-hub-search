import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FavouritesPage } from "./pages/FavouritesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}

export default App;
