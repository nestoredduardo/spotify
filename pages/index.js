import Head from 'next/head'

import Sidebar from '@components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen relative bg-background">
        <Sidebar />
      </main>
    </div>
  )
}
