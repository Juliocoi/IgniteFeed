import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/juliocoi.png" />

      <div className={styles.commentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Júlio César Amorim</strong>
              <time title='01 de dezembro de 2024' datetime="2024-12-01 16:14:39">2h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Cara. Parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>15</span>
          </button>
        </footer>
      </div>
    </div>
  )
}