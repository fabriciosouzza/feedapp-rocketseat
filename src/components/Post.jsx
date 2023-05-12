import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <img 
                        className={styles.avatar} 
                        src="https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" 
                    />
                    
                    <div className={styles.authorInfo}>
                        <strong>George Boole</strong>
                        <span>Logician</span>
                    </div>

                </div>

                <time title='05 de Maio às 09:45h' dateTime="2023-05-11 09:45:17">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#">👉 jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
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
