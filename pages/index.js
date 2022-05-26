import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>next js</title>
        <meta name='Liang Wu' content='this is a next js website' />
      </Head>
      <h1>Welcome to Next</h1>
    </div>
  )
}
