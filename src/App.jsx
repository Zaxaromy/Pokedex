import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import AppRoutes from "./components/AppRoutes";
import MainContent from "./components/MainContent";

const App = () => {
  const { pokemonArray, selectedType, loading, handleTypeSelect } =
    MainContent();

  return (
    <div>
      <StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AppRoutes
                  loading={loading}
                  selectedType={selectedType}
                  handleTypeSelect={handleTypeSelect}
                  pokemonArray={pokemonArray}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </div>
  );
};

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
