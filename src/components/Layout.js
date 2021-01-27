import Head from 'next/head'
import { Container } from 'react-bootstrap'
import GlobalStyles from 'styles/GlobalStyles'
import MainNav from 'components/MainNav'
import Footer from 'components/Footer'
import { useTheme } from 'providers/ThemeProvider'

function Layout({ children, className }) {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={theme.type}>
            <Head>
                <title>My Personal Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Container>
                <GlobalStyles />
                <MainNav theme={theme} toggleTheme={toggleTheme} />
                <div className={`page-wrapper ${className}`}>

                    {children}

                </div>
                <Footer />
            </Container>
            <style jsx global>
                {`
                    html, body {
                        background: ${theme.background};
                        color: ${theme.fontColor};
                        transition: all 0.2s ease-out 0s;
                    }
                `}
            </style>
        </div>

    )
}

export default Layout;