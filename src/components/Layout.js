import Head from 'next/head'
import { Container } from 'react-bootstrap'
import GlobalStyles from 'styles/GlobalStyles'
import MainNav from 'components/MainNav'
import Footer from 'components/Footer'

function Layout({ children, className }) {
    return (
        <>
            <Head>
                <title>My Personal Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Container>
                <GlobalStyles />
                <MainNav />
                <div className={`page-wrapper ${className}`}>

                    {children}

                </div>
                <Footer />
            </Container>
        </>

    )
}

export default Layout;