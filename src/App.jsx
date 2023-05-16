import { Header } from './components/header.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import { Post } from './components/Post.jsx'

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'George Boole',
      role: 'Logician'
    },
    content: [ 
      {type: 'paragraph', content: 'Criador da álgebra booleana, fundamental para o desenvolvimento da computação moderna.'},
      {type: 'paragraph', content: 'O trabalho de Whitehead e Russell em Principia Mathematica (1910-1913) foi o primeiro a convencer um grupo de matemáticos que a lógica simbólica devia receber sua séria atenção.'},
      {type: 'link', content: '<a href="https://pt.wikipedia.org/wiki/George_Boole" target= "_blank">👉 Para mais informações</a>'}
    ],
    publishedAt: new Date('2023-05-04 10:32:07')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
      name: 'Charles Babbage',
      role: 'Mathematician'
    },
    content: [ 
      {type: 'paragraph', content: 'Charles Babbage é mais conhecido e, de certa forma, referenciado como o inventor que projetou o primeiro computador de uso geral, utilizando apenas partes mecânicas, a máquina analítica.'},
      {type: 'link', content: '<a href="#">👉 jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2023-05-05 22:43:15')
  }
]



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt} 
              />
            )
          })}
        </main>
      </div>
    </div>    
  )
}

