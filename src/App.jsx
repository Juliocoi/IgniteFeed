//import { Post } from '.Post'
import { Header } from './componentes/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './componentes/Sidebar'
import { Post } from './componentes/Post'

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author='Júlio César'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores quidem dicta tenetur esse, reprehenderit ratione ab. Ullam reprehenderit voluptate tempore eum sed quisquam atque beatae! Consectetur quo reiciendis consequuntur.'
          />

          <Post
            author='Amorim de Souza'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aliquam?'
          />
        </main>
      </div>
    </div>
  )
}

export default App
