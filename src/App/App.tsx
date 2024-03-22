import Header from '../Pages/Header/Header'
import Main from '../Pages/Main/Main'
import styles from './App.module.scss'

function App() {

  return (
    <main className={styles.main}>    
      <Header/>
      <Main/>
    </main>
  )
}

export default App
