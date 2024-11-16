import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserProfile from './userProfile/UserProfile';

export default function Body(){
    return (<>
    <Container>
        <Row>
            <Col style={{backgroundColor:"Red"}}> <UserProfile/> </Col>
            <Col style={{backgroundColor:"Blue"}}>Second, but unordered</Col>
            <Col style={{backgroundColor:"Green"}}>Third, but first</Col>
        </Row>
    </Container>
        </>);
}