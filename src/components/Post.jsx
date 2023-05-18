import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post (props) {
    const publishedAtDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {locale: ptBR, addSuffix: true})

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
                        return <p>{line.content}</p>;
                    } else if (line.type == 'link') {
                            return <p><a href={line.taghref} target={line.tagtarget}>{line.content}</a></p>;
                        }
                    }
                )}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>

                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    );
};
