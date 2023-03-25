import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"

import "./global.css"


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Marcelo Victor"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia magnam officiis quaerat voluptate maiores, eveniet nisi. Sed quod incidunt adipisci, quas, voluptate nisi magnam quis molestiae similique odit accusamus?"
        />
        <Post 
          author="Fulano de tal"
          content="Um novo post muito legal"
        />
        </main>
      </div>
    </div>
  )
}


