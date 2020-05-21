import Head from 'next/head'

import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio | Success!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <Header text="Contact me" />
        Form successfully submitted!
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
