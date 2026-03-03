import Card from './Card'
import Counter from './Counter'
import './App.css'

function App() {


  return (
    <>
      <header>
        <nav className='navbar'>
          <h1 className="logo">ReactAcademy</h1>

          <ul className="nav-links">
            <li><a href="#inicio" className="active">Inicio</a></li>
            <li><a href="#cursos">cursos</a></li>            
            <li><a href="#nosotros">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className='hero'>
        <h1>Aprende <span>React</span> desde cero</h1>
        <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
        <button>Ver Cursos</button>
      </section>

      <section id='cursos'>
        <h2>Nuestros Cursos</h2>
        <p>Elige el camino que mejor se adapte a ti</p>
        <Card titulo="card 1"/>
        <Card titulo='card 2'/>
        <Card titulo='card 3'/>
        <Card titulo='card 4'/>
      </section>

      <section id='nosotros'>
        <h2>Cuántos estudiantes van a inscribirse?</h2>
        <p>Usa los botones para ajustar el número</p>
        <Counter />
        <p>estudiantes inscritos</p>
      </section>

      <footer>
        <p>&copy; 2026 <span>ReactAcademy.</span> Taller 2 -- React Fundamentos</p>
      </footer>
    </>
  )
}

export default App
