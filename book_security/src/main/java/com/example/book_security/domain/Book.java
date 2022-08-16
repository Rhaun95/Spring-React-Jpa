package com.example.book_security.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity //서버 실행시에 테이블이 h2에생성됨 ORM[ Object Relation Mapping]
public class Book {
    @Id //PK를 해당 변수로
    //해당 데이터베이스 번호증가 전략을 따라가겠다
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String author;

}
