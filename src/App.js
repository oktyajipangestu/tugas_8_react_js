import { Component } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Figure,
  Breadcrumb,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Row className="bg-dark" md={4}>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
              <Dropdown.Item href="#/action-2">Indonesia</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Inggris</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col className="ml-auto" md={2}>
            <Figure className="text-center">
              <Figure.Image
                width={50}
                height={50}
                alt="user photo"
                src="https://png.pngtree.com/svg/20161113/ef1b24279e.png"
              />
              <Figure.Caption>
                <p className="text-white">Alan Saputra</p>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="ml-auto">
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
