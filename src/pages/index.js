import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">

        <Navbar />
        <Header />
      </div>
    </div>
  )
}
