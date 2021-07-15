
import { Container, Row, Col } from 'reactstrap';
import ListPage from './listPage';
function UserInfo() {
  
  return (
    <Container className="home-page">
        <Row>
            <Col md="12">
                <ListPage />
            </Col>            
      </Row>
    </Container>
  );
}

export default UserInfo;