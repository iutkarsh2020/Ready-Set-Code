import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function(){
    return (<>
    <Container>
        <Row>
            <Col>This is header</Col>
            <Col> Questions</Col>
            <Col> Achievements</Col>
            <Col> Leaderboard</Col>
        </Row>
    </Container>
    
    </>);
}