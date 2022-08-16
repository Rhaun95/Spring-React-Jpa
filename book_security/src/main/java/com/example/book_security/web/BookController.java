package com.example.book_security.web;

import com.example.book_security.Service.BookService;
import com.example.book_security.domain.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @CrossOrigin
    @PostMapping("/book")          //JSON으로 받음
    public ResponseEntity<?> save(@RequestBody Book book){
        return new ResponseEntity<>(bookService.save(book), HttpStatus.CREATED);
    }
    @CrossOrigin
    @GetMapping("/book")
    public ResponseEntity<?> findAll(){
        //상태코드 보냄                                 HTTPStatus.NOT_FOUND
        return new ResponseEntity<>(bookService.getAll(), HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping("/book/{id}")
    public ResponseEntity<?> findById(@PathVariable Long id){
        return new ResponseEntity<>(bookService.getBook(id), HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping("/book/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){
        return new ResponseEntity<>(bookService.update(id, book), HttpStatus.OK);
    }
    @CrossOrigin
    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        return new ResponseEntity<>(bookService.delete(id), HttpStatus.OK);
    }
}
