import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function(){
    return (
    <Container style={{ height: '50vh' }}>
      <Row className="d-flex justify-content-center" style={{backgroundColor:"black"}}>
        <Col xs="auto" style={{backgroundColor:"blue"}}>
          <Image
            src="images/Utkarsh.PNG"
            roundedCircle
            style={{ width: '250px', height: '250px' }}
          />
        </Col>
      </Row>
      <Row className="text-center mt-3" >
        <Col>
          kiojdsijiodsfusdhfsdoihsdfsoidfusofisusodi
        </Col>
      </Row>
      
    </Container>
    );
}