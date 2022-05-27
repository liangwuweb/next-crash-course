import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {

  console.log(articles)
  return (
    <div>
      <Head>
        <title>next js</title>
        <meta name='Liang Wu' content='this is a next js website' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}
