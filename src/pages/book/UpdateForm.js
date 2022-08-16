import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UpdateForm = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8091/book/' + id)
      .then((res) => res.json())
      .then((res) => setBook(res));
  }, []);

  const ChangeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();

    fetch('http://localhost:8091/book/' + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(book), //JS Object를 JSON으로 변경해서 던진다
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          setBook(book);
          navigate('/book/' + id);
        } else {
          alert('업데이트 실패!');
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
              value={book.title}
              onChange={ChangeValue}
              name="title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              value={book.author}
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

export default UpdateForm;
