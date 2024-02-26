import './App.css'
import Card from './components/Card';
import fondo from './assets/img/fondo.jpg'
import titulo from './assets/img/titulo.png'
import peliculas from './data/peliculas'

function App() {
  const peliculasList = peliculas.map(p => {
    return <Card key={p.id} titulo={p.titulo} image={p.image} />
  })

  return (
    <main className='App'>
      <img className='img-titulo' src={titulo}></img>
      <h1 className='titulo'>Películas</h1>
      <div className='container-1'>
        {peliculasList[0]}
        {peliculasList[1]}
        {peliculasList[2]}
      </div>
      <div className='container-2'>
        {peliculasList[3]}
        {peliculasList[4]}
      </div>
    </main>
  )
}

export default App
