import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center bg-purple-100">
        <h1 className="text-2xl text-gray-900 font-bold">
          It's My Personal Blog
        </h1>
      </main>
    </div>
  )
}
