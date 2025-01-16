import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{BgImageWithNavbar()}</div>
        <Breadcrumb><BreadcrumbItem>test</BreadcrumbItem></Breadcrumb>
        <Card>
          <Card.Img />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Eitai</Card.Text>
            <Card.Text>Oitai</Card.Text>
          </Card.Body>
        </Card>
        <Alert variant="primary">This is a button!</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export function BgImageWithNavbar() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


