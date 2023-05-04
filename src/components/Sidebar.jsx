import styles from './Sidebar.module.css'

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <strong>John Doe</strong>
                <span>Engineer</span>

                <footer>
                    <a href="#">Editar seu perfil</a>
                </footer>
            </div>
        </aside>
    );
}