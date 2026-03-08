import Card from './Card'
import Counter from './Counter'
import './App.css'

function App() {


  return (
    <>
      <header>
        <nav className='navbar'>
          <h5 className="logo">ReactAcademy</h5>

          <ul className="nav-links">
            <li><a href="#inicio" className="active">Inicio</a></li>
            <li><a href="#cursos">Cursos</a></li>
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
        <div className='tarjetas'>
          <Card icon = '⚛️' titulo="React Básico" texto='Componentes, props, estado y eventos. Todo lo que necesitas para empezar.' boton='Principiante'/>
          <Card icon = '🔄' titulo='React Hooks' texto='Profundiza en useState, useEffect y crea tus propios custom hooks.' />
          <Card icon = '📁' titulo='Estado Global' texto='Gestiona el estado con Context API y aprende cuándo usarlo.' />
          <Card icon = '🚀' titulo='React Avanzado' texto='Rendimiento, patrones avanzados y arquitectura para proyectos grandes.' boton='Avanzado'/>
        </div>
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
