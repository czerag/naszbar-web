import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './assets/components/Views/Home/Home';
import { Header } from './assets/components/Header/Header';
import { Recipes } from './assets/components/Views/Recipes/Recipes';
import { MyRecipes } from './assets/components/Views/MyRecipes/MyRecipes';
import { Sidebar } from './assets/components/Sidebar/Sidebar';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sidebar />
      <main className="main-container">
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;

