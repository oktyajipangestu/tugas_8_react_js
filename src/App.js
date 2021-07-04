import { Component } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Figure,
  Breadcrumb,
  Carousel,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Row className="bg-dark">
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

        <br />
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Inggris Mau Jadi Tim Terbaik</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>
                    Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia
                    U-23 Tetap bagus
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
