import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/juliocoi.png" />
          <div className={styles.authorInfo}>
            <strong>Júlio César</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title='01 de dezembro de 2024' datetime="2024-12-01 16:14:39" className={styles.datetime}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>   
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p>👉 <a href="#">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto </a> 
            <a href="#">#nlw </a> 
            <a href="#">#rocketseat</a>
          </p>
        
      </div>
    </article>
  )
}