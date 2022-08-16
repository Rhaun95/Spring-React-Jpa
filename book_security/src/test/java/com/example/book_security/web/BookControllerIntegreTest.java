package com.example.book_security.web;


import org.springframework.boot.test.context.SpringBootTest;

/**
 * 통합 테스트(모든 Bean들을 똑같이 IoC에 올리고 테스트)
 * WebEnvironment.MOCK = 실제 톰켓을 올리는게 아니라, 다른 톰켓으로 테스트
 * WebEnvironment.RANDOM_POR = 실제 톰켓으로 테스트
 */

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK) 
public class BookControllerIntegreTest {
    
}
