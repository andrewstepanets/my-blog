
import { Row, Col, Media, Image } from 'react-bootstrap'


function AuthorIntro() {
    return (
        <Row>
            <Col md="8">
                <Media className="mb-4 admin-intro">
                    <Image
                        roundedCircle
                        width={80}
                        height={80}
                        className="mr-3"
                        src="https://avatars1.githubusercontent.com/u/16757133"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                        <p className="welcome-text">
                            My name is Andrew Stepanets and I am an experienced front end developer.
                            and this is my blog page.
                </p>
                    </Media.Body>
                </Media>
            </Col>
        </Row>
    )
}

export default AuthorIntro;