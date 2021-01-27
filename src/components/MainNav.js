import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'


function MainNav({ theme, toggleTheme }) {
    return (
        <Navbar
            variant={theme.type}
            className="as-navbar as-nav-base"
            bg="transparent"
            expand="lg" >
            <Navbar.Brand className="as-navbar-brand">
                <Link href="/">
                    <a >Andrew Stepanets</a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link
                        as={() =>
                            <Link href='/'>
                                <a className="as-navbar-item as-navbar-link">Home</a>
                            </Link>
                        }
                    />
                    <button className="btn btn-success" onClick={toggleTheme}>
                        {theme.type}
                    </button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainNav;