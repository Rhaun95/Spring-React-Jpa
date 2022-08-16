package com.example.book_security.Service;

import com.example.book_security.domain.Book;
import com.example.book_security.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;


//기능을 정의할 수 있고, 트랜잭션을 관리할 수 있음.
//여러개의 데이터베이스의 쿼리를 실행하면서 기능을 만들어 내는 곳
@RequiredArgsConstructor
//final의 constructor를 만들어줌 -> 자동 DI
@Service
public class BookService {

    //함수 => 송금() -> 레파지토리에 여러개의 함수 실행 -> commit or rollback

    private final BookRepository bookRepository;

    @Transactional//서비스 함수가 종료될 때 commit할지 rollback할지 트랜잭션 관리
    //만약 save가 3번이 실행됬고 중간에 오류날 경우 RollBack -> 성공적으로 Commit
    public Book save(Book book){
        return bookRepository.save(book);
    }
    @Transactional(readOnly = true) //JPA 변경감지 내부 기능 활성화 X-> 내부연산 감소, update시의 정합성을 유지,
                                    // insert의 유령대이터현상(팬텀현상) 못막음
    public Book getBook(Long id ){
        return bookRepository.findById(id)
                .orElseThrow(()->
                    new IllegalArgumentException("id를 혹인해주세요!"));
    }
    @Transactional(readOnly = true)
    public List<Book> getAll(){
        return bookRepository.findAll();
    }

    @Transactional
    public Book update(Long id, Book book){
        Book bookEntity = bookRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("id를 확인해주세요")); //영속화(book Object)-> 영속성 컨텍스트에 보관

        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        return bookEntity;
    }//함수 종료 => 트렌젝션 종료 => 영속화 되어있는 데이터를 DB로 갱신(flush)=>commit ====> 더티체킹

    public String delete(Long id){
         bookRepository.deleteById(id);
         return "ok";

    }
}
