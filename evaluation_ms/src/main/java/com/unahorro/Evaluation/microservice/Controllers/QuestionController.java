package com.unahorro.Evaluation.microservice.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.unahorro.Evaluation.microservice.Models.Question;
import com.unahorro.Evaluation.microservice.Repositories.QuestionRepository;

@RestController
@RequestMapping("/")
public class QuestionController {
    
    @Autowired
    QuestionRepository questionRepository;

    @GetMapping(value = "/questions")
    public ArrayList<Question> getQuestionsByLevel(@Validated @RequestParam("level") Integer level ){
        return (ArrayList<Question>) questionRepository.findByQuestionLevel(level);
    }

    // TODO: Get questions with their respective answer options
}
