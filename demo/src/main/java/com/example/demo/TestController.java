package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class TestController {

    @PostMapping("/test")
    public String test(@RequestBody Message msg) {
        System.out.println(msg.getMsg());
        return "Hello from Spring Boot";
    }
}
