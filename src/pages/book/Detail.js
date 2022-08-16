import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Detail = (props) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState([]);

  //상세보기
  useEffect(() => {
    fetch('http://localhost:8091/book/' + id)
      .then((res) => res.json())
      .then((res) => setBook(res));
  }, []);

  //삭제
  const deleteBook = () => {
    fetch('http://localhost:8091/book/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === 'ok') {
          navigate('/');
        } else {
          alert('삭제실패');
        }
      });
  };

  //업데이트 페이지로
  const updateBook = (props) => {
    navigate('/updateForm/' + id);
  };

  return (
    <div>
      <Container>
        <h1>상세보기</h1>
        <Button variant="warning" onClick={updateBook}>
          수정
        </Button>{' '}
        &nbsp;
        <Button variant="danger" onClick={deleteBook}>
          삭제
        </Button>
        <hr />
        <h2>{book.author}</h2>
        <h1>{book.title}</h1>
      </Container>
    </div>
  );
};

export default Detail;
