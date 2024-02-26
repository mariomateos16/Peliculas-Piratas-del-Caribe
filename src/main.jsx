import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import peliculas from './data/peliculas.js';
import PeliculaView1 from './views/PeliculaView1.jsx';
import PeliculaView2 from './views/PeliculaView2.jsx'; 
import PeliculaView3 from './views/PeliculaView3.jsx'; 
import PeliculaView4 from './views/PeliculaView4.jsx'; 
import PeliculaView5 from './views/PeliculaView5.jsx'; 

  const AppWithRouter = () => {
  const peliculaRoutes = peliculas.map((pelicula) => {
    const componenteVista = getComponenteVista(pelicula.titulo); // Función para obtener el componente de vista específico

  // Función para obtener el componente de vista específico según el título de la película
  function getComponenteVista(titulo) {
    switch (titulo) {
      case 'piratasdelcaribe-1':
        return PeliculaView1;
      case 'piratasdelcaribe-2':
        return PeliculaView2;
      case 'piratasdelcaribe-3':
        return PeliculaView3;
      case 'piratasdelcaribe-4':
        return PeliculaView4;
      case 'piratasdelcaribe-5':
        return PeliculaView5;
      default:
        return PeliculaView1; // Un valor predeterminado en caso de que no haya coincidencia
      }
    }

  return (
    <Route
      key={pelicula.titulo}
      path={`/${pelicula.titulo}`}
      element={React.createElement(componenteVista)}
    />
  );
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {peliculaRoutes}
      </Routes>
    </Router>
    );
  };

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <AppWithRouter />
    </React.StrictMode>,
  );

