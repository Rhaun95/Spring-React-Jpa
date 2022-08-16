import React from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">
            홈
          </Link>
          <Nav className="me-auto">
            <Link to="/joinForm" className="nav-link">
              회원가입
            </Link>
            <Link to="/loginForm" className="nav-link">
              로그인
            </Link>
            <Link to="/saveForm" className="nav-link">
              글쓰기
            </Link>
          </Nav>
          <Form>
            <FormControl type="text" placeholder="search" className="mr-sm-2" />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Header;
