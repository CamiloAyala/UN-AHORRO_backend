package com.unahorro.Evaluation.microservice.Repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import com.unahorro.Evaluation.microservice.Models.Answer;

public interface AnswerRepository extends CrudRepository<Answer, Integer>{
    ArrayList<Answer> findByQuestionID(Integer questionID);
}
