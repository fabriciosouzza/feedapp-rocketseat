import { Comment } from './Comment';
import { Avatar } from './Avatar';
import styles from './Post.module.css';

export function Post (props) {
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

                <time title='05 de Maio às 09:45h' dateTime="2023-05-11 09:45:17">{props.publishedAt.toString()}</time>
            </header>

            <div className={styles.content}>
               
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
