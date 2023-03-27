import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export const Comment = () => {
  return(
    <div classname={styles.Comment}>
      <img src="https://github.com/marcelovdsm.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcelo Victor</strong>
              <time title='27 de março ás 10:59' dateTime='2023-03-27 10:59:34'>Cerca de 1h atrás</time>
              
            </div>

            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom dev, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}