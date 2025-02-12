//import { Post } from '.Post'
import { Header } from './componentes/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './componentes/Sidebar'
import { Post, iPost } from './componentes/Post'

const posts: iPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/juliocoi.png',
      name: 'Júlio César Amorim',
      role: 'Dev Jr',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-03 13:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jahidnation.png',
      name: 'Fulano de tal',
      role: 'Dev Back-End',
    },
    content: [
      { type: 'paragraph', content: 'Fala, meu povo!'},
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium perspiciatis impedit laudantium, optio placeat tempora blanditiis, voluptatum cumque similique inventore autem aliquid voluptatem ullam temporibus non in eos sint consequuntur. 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-02-02 10:30:56'),
  }
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
        {
          posts.map(posts => {
            return (
              <Post
                key={posts.id}
                post={posts}
              />
            )
          })
        }
        </main>
      </div>
    </div>
  )
}

export default App
