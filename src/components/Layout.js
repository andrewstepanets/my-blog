import { Container } from 'react-bootstrap'
import GlobalStyles from 'styles/GlobalStyles'
import MainNav from 'components/MainNav'
import Footer from 'components/Footer'

function Layout({ children, className }) {
    return (
        <Container>
            <GlobalStyles />
            <MainNav />
            <div className={`page-wrapper ${className}`}>

                {children}

            </div>
            <Footer />
        </Container>
    )
}

export default Layout;