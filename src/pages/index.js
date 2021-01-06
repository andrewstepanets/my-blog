import Head from 'next/head'
import { Cross, Menu } from '../icons'

export default function Home() {
  return (
    <div className="bg-primaryGray">
      <Head>
        <title>My Personal Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <nav className="bg-bgGray">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="./" className="text-darkGray text-2xl font-bold uppercase">Andrew Stepanets</a>
                </div>

              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  <a href="./" className="text-darkGrey px-3 py-2 text-xl font-extralight uppercase hover:underline hover:text-yellow-100">Home</a>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">

                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 border hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open main menu</span>

                  <Menu className="block h-6 w-6" stroke="currentColor" />
                  <Cross className="hidden h-6 w-6" stroke="currentColor" />

                </button>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
