import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

import styles from './Post.module.css'


export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleCreateNewComment = () => {
    event.preventDefault()
    
    setComments([...comments, newCommentText])

    setNewCommentText('')

  }

  const handleNewCommentChange = () => {
    setNewCommentText(event.target.value)
  }

  return(
    <article className={styles.Post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if(line.type === 'link') {
            return <p key={line.content}> <a href="">{line.content}</a> </p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea 
          onChange={handleNewCommentChange}
          name='comment'
          value={newCommentText}
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment key={comment} content={comment}/>
          )
        })}
      </div>
    </article>
  )
}