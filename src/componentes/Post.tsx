import { format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface iAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

interface iContent {
  type: 'paragraph' | 'link';
  content: string;
}

export interface iPost {
  id: number;
  author: iAuthor;
  publishedAt: Date;
  content: iContent[];
}

interface iPostProps {
  post: iPost;
}

export function Post({ post }: iPostProps) {

  const publisheAtDateFormat = format(post.publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComents] = useState(['Projeto muito bacana. Parabens!']);  
  const [newCommentText, setNewComentText] = useState('');

  function handleCreateNewComent(event: FormEvent){
    event.preventDefault();
    setComents([...comments, newCommentText]);
    setNewComentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement> ){
    event.target.setCustomValidity('');
    setNewComentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Faça um comentário primeiro');
  }

  function deleteComment (commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComents(commentsWithoutDeletedOne);
  }

  const isTextareaEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>

        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} /> 
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publisheAtDateFormat} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      {/* render conteúdo do post */}
      <div className={styles.content}>
        { post.content.map(line => {
            if(line.type === 'paragraph'){
              return <p key={line.content}>{line.content}</p>;
            } else if(line.type === 'link'){
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })}
      </div>
      {/* Textarea de comentário dos posts */}    
      <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder='Escreva um comentário...'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isTextareaEmpty}>Publicar</button>
        </footer>
      </form>
    {/* render comentários dos posts */}
      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
          })
        }
      </div>
    </article>
  )
}
