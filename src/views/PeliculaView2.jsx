import React from 'react'
import './Peliculas.css'
import titulo from '../assets/img/logopelicula2.png'
import { useNavigate } from 'react-router-dom';
import personajesPiratasDelCaribe2 from '../data/personajes.js';
import peliculas from '../data/peliculas.js'

function PeliculaView2({ id }) {
  const navigate = useNavigate();

  const pelicula = peliculas.find((p) => p.id === 2);

  return (
    <main className='main'>
      <div className='background-2'>
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
              {personajesPiratasDelCaribe2[1].map((personaje, index) => (
              <div key={index} className='card_personaje'>
                <img className='imagen_personaje' src={personaje.imagen} alt={personaje.nombre} />
                <h3 class="personaje_name" >{personaje.nombre}</h3>
                <p class="personaje_description" ><span class="etiqueta">Rol:</span> {personaje.rol}</p>
                <p class="personaje_description" ><span class="etiqueta">Sexo:</span> {personaje.sexo}</p>
                <p class="personaje_description" ><span class="etiqueta">Habilidades:</span> {personaje.habilidades}</p>
              </div>
            ))}
          </div>

        <div className='button_container'>
          <button className='buttonVolver' onClick={() => navigate('/')}>Volver</button>
        </div>

      </section>
    </main>
  )
}

export default PeliculaView2;
