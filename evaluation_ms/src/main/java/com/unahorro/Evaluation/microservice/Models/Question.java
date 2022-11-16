package com.unahorro.Evaluation.microservice.Models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "questions")
public class Question {

    public enum questionType {
        MULTIPLE_CHOICE, TRUE_FALSE
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer questionID;

    private Integer questionLevel;

    private String questionText;

    @Enumerated(EnumType.STRING)
    private questionType questionType;

    public Question() {
        super();
    }

    public Question(Integer questionID, Integer questionLevel, String questionText, questionType questionType) {
        this.questionID = questionID;
        this.questionLevel = questionLevel;
        this.questionText = questionText;
        this.questionType = questionType;
    }

    public Integer getQuestionID() {
        return questionID;
    }

    public void setQuestionID(Integer questionID) {
        this.questionID = questionID;
    }

    public Integer getQuestionLevel() {
        return questionLevel;
    }

    public void setQuestionLevel(Integer questionLevel) {
        this.questionLevel = questionLevel;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public questionType getQuestionType() {
        return questionType;
    }

    public void setQuestionType(questionType questionType) {
        this.questionType = questionType;
    }

}
