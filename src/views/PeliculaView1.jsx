import React from 'react';
import './Peliculas.css';
import { useNavigate } from 'react-router-dom';
import peliculas from '../data/peliculas.js'
import personajesPiratasDelCaribe1 from '../data/personajes.js';
import titulo from '../assets/img/logopelicula1.png';


function PeliculaView1({ id }) {
  const navigate = useNavigate();

  const pelicula = peliculas.find((p) => p.id === 1);
  

  return (
    <main className='main'>
      <div className='background-1'>
      <header>
        <img className='pelicula-titulo' src={titulo} ></img>
      </header>
        <h1 className='titulo_detalles'>Detalles</h1>
      <section className='container_pelicula'>
        <div className='container_pelicula-left'>
          <h2 className='titulo_sinopsis'>Sinopsis</h2>
          <p className='sinopsis_description'>{pelicula.sinopsis}</p>
        </div>
        <div className='container_pelicula-right'>
          <div className='bloque-arriba'>
              <h3 className="titulo_duracion">Duración</h3>
              <p>{pelicula.duracion}</p>
            </div>
            <div className='bloque-abajo'>
              <h3 className="titulo_calificacion">Calificación</h3>
              <p>{pelicula.calificacion}</p>
            </div>
            <div className='bloque-abajo'>
              <h3 className="titulo_genero">Género</h3>
              <p>{pelicula.genero}</p>
            </div>
            <div className='bloque-arriba'>
              <h3 className="titulo_fecha">Fecha de estreno</h3>
              <p>{pelicula.fecha_estreno}</p>
            </div>
        </div>
      </section>
      </div>
      <section className='section_personajes'>
        <h1 className='titulo_detalles'>Personajes</h1>
          <div className='container_personajes'>
              {personajesPiratasDelCaribe1[0].map((personaje, index) => (
              <div key={index} className='card_personaje'>
                <img className='imagen_personaje' src={personaje.imagen} alt={personaje.nombre} />
                <h3 class="personaje_name" >{personaje.nombre}</h3>
                <p class="personaje_description" ><span class="etiqueta">Rol:</span> {personaje.rol}</p>
                <p class="personaje_description" ><span class="etiqueta">Sexo:</span> {personaje.sexo}</p>
                <p class="personaje_description" ><span class="etiqueta">Habilidades:</span> {personaje.habilidades}</p>
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}

export default PeliculaView1;


{/* <button onClick={() => navigate('/')}>Volver a la lista de películas</button> */}