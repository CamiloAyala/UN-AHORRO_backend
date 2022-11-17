package com.unahorro.Evaluation.microservice.Repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.unahorro.Evaluation.microservice.Models.Evaluation;

@Repository
public interface EvaluationRepository extends CrudRepository<Evaluation, Integer> { 
    ArrayList<Evaluation> findByUserID(Integer userID);
}