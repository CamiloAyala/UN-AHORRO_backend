package com.unahorro.Evaluation.microservice.Controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.unahorro.Evaluation.microservice.Models.Evaluation;
import com.unahorro.Evaluation.microservice.Repositories.EvaluationRepository;

@RestController
@RequestMapping("/")
public class EvaluationController {
    
    @Autowired
    private EvaluationRepository evaluationRepository;

    @PostMapping(value = "/evaluations")
    public Evaluation addNewEvaluation (@Validated @RequestBody Evaluation evaluation) {
        return evaluationRepository.save(evaluation);
    }

    @GetMapping(value = "/users/{userID}/evaluations")
    public ArrayList<Evaluation> getUserEvaluations(@PathVariable Integer userID ){
        return (ArrayList<Evaluation>) evaluationRepository.findByUserID(userID);
    }
}