import './app.module.css'
import styles from './app.module.css'
import {Navbar} from "./components/Navbar";
import {Form} from "./features/Forms";

function App() {

  return (
    <section className={styles.grid}>
        <Navbar.Options />
        <Form.Configuration />
    </section>
  )
}

export default App
