package com.unahorro.Evaluation.microservice.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.unahorro.Evaluation.microservice.Models.Answer;

@Repository
public interface AnswerRepository extends CrudRepository<Answer, Integer>{

    @Query("SELECT ans FROM Answer ans WHERE ans.question.questionID = ?1")
    List<Answer> findByQuestionId(Integer questionID);
}
