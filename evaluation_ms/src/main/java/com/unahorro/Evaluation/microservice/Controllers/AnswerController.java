package com.unahorro.Evaluation.microservice.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.unahorro.Evaluation.microservice.Models.Answer;
import com.unahorro.Evaluation.microservice.Repositories.AnswerRepository;

@RestController
@RequestMapping("/")
public class AnswerController {

    @Autowired
    AnswerRepository answerRepository;
    
    @GetMapping(value = "/questions/{questionID}/answers")
    public List<Answer> getAnswersByQuestion(@PathVariable Integer questionID ){

        return (List<Answer>) answerRepository.findByQuestionId(questionID);
    }
    
}
