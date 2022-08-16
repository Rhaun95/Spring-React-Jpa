import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

const SaveForm = (props) => {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const ChangeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();

    fetch('http://localhost:8091/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book), //JS Object를 JSON으로 변경해서 던진다
    })
      .then((res) => res.json())
      .then((res) => {
        if (res !== null) {
          setBook(book);
          navigate('/');
        } else {
          alert('글 등록에 실패하였습니다');
        }
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={submitBook}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={ChangeValue}
              name="title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Author"
              onChange={ChangeValue}
              name="author"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SaveForm;
