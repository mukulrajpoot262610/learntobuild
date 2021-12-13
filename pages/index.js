import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>LearnToBuild | Find the best resources</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <div>
          <h1 className="text-8xl">Learn To Build</h1>
          <h1 className="text-3xl my-2">The Best way to learn to code is to code 😀</h1>
          <h1>Tutorials are great, but building projects is the best way to learn. Do project based learning and learn code the right way!</h1>
        </div>
      </main>

    </div>
  )
}
