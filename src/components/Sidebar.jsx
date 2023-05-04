import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1563242152-568e5de6f2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar} 
                    src="https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                />

                <strong>John V. Neumann</strong>
                <span>Business Consultant</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    );
}