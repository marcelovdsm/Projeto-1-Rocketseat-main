import styles from './Post.module.css'

export const Post = () => {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https" alt="" />
        </div>
      </header>
    </article>
  )
}