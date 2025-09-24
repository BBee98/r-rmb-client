import './app.module.css'
import styles from './app.module.css'
import {Navbar} from "./components/Navbar";
import {Canvas} from "./components/Form";

function App() {

  return (
    <section className={styles.grid}>
        <Navbar.Options />
        <Canvas.Form />
    </section>
  )
}

export default App
