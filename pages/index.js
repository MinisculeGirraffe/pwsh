import Head from 'next/head'
import styles from '../styles/Home.module.css'

import dynamic from 'next/dynamic'
const CodeEditor = dynamic(
  () => import('../components/editor'),
  { ssr: false },
)
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>

      </Head>

      <main >
        <div className=' min-w-screen min-h-screen'>
          <CodeEditor />
        </div>
      </main>

      <footer >

      </footer>
    </div>
  )
}
