import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './ui/components/Navbar/Navbar';
import HomePage from './routes/HomePage/HomePage';
import AboutPage from './routes/AboutPage/AboutPage';
import ModulesPage from './routes/ModulesPage/ModulesPage';
import ProgressPage from './routes/ProgressPage/ProgressPage';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('aletheia-theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aletheia-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="main-content-section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;