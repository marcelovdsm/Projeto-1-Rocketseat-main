import styles from './Post.module.css'

export const Post = () => {
  return(
    <article className={styles.Post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/marcelovdsm.png" />
          <div className={styles.authorInfo}>
            <strong>Marcelo Victor</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='27 de março ás 10:59' dateTime='2023-03-27 10:59:34'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

      <p>
        <a href="">jane.design/doctorcare</a>
      </p>

      <p>
        <a href="">#novoprojeto</a>
        <a href="">#nlw</a>
        <a href="">#rocketseat</a>
      </p>

      </div>
    </article>
  )
}