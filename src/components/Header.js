import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Header() {
    return (
        <Container>
            <h1>Hello, world!</h1>
                <p className='justify-content-center'>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button>Learn more</Button>
                </p>
        </Container>
    )
}

export default Header;