package com.unahorro.Evaluation.microservice.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "evaluation")
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer evaluationID;
    
    private Integer score;

    private String date;

    private Integer level;

    private Integer userID;

    public Evaluation(){
        super();
    }
    
    public Evaluation(Integer score, String date, Integer level, Integer userID) {
        this.score = score;
        this.date = date;
        this.level = level;
        this.userID = userID;
    }

    public Integer getEvaluationID() {
        return evaluationID;
    }    

    public void setEvaluationID(Integer evaluationID) {
        this.evaluationID = evaluationID;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }
    
}
