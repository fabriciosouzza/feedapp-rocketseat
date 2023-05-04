import { Post } from './Post.jsx'
import { Header } from './components/header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Blaise Pascal"
          content="A nossa natureza é o movimento; o completo repouso é a morte."
          />

          <Post 
            author="Nikola Tesla"
            content="Se você quiser descobrir os segredos do Universo, pense em termos de energia, frequência e vibração."
          />
        </main>
      </div>
    </div>    
  )
}
