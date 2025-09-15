import './app.module.css'
import styles from './app.module.css'
import {Navbar} from "./components/Navbar";

function App() {

  return (
    <section className={styles.grid}>
        <Navbar.Options />
    </section>
  )
}

export default App
