package com.unahorro.Evaluation.microservice.Repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.unahorro.Evaluation.microservice.Models.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Integer> {
    ArrayList<Question> findByQuestionLevel(Integer questionLevel);

    // TODO: Add query to get question with answers options
}
