import { useState } from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post (props) {

    const [comments, setComments] = useState(['comentário1'])
    const [newCommentText, setNewCommentText] = useState('')
    const publishedAtDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {locale: ptBR, addSuffix: true})

    function handleCreatNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('');

    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
        event.target.setCustomValidity('')
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Campo necessário')   
    }

    const isNewCommentEmpty = newCommentText.length == 0
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar src={props.author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>

                </div>

                <time title={publishedAtDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {props.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                            return <p key={line.content}><a href={line.taghref} target={line.tagtarget}>{line.content}</a></p>;
                        }
                    }
                )}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea 
                    name ='comment' 
                    placeholder='Deixe um comentário' 
                    onChange={handleNewCommentChange} 
                    value={newCommentText} 
                    required
                    onInvalid={handleNewCommentInvalid} 
                />

                <footer>
                <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>

        </article>
    );
};
