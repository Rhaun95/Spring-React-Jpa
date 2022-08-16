import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import BookItem from '../../components/BookItem';

const Home = () => {
  const [books, setBooks] = useState([]);

  //함수 실행시 최초 한번 실행되는 것
  useEffect(() => {
    fetch('http://localhost:8091/book', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        setBooks(res);
      }); //비동기 함수
  }, []);

  return (
    <div>
      <Container>
        <h1>책 리스트 보기</h1>
        {books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
