import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src='http://www.github.com/juliocoi.png' alt=''
        />
        <strong>Júlio César</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
          
        </a>
      </footer>

    </aside>
  );
}