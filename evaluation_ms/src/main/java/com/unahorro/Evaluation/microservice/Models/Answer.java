package com.unahorro.Evaluation.microservice.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "answers")
public class Answer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer answerID;

    private String answerText;

    private boolean isCorrect;

    @ManyToOne(targetEntity = Question.class)
    @JoinColumn(name = "questionID")
    private Integer questionID;

    public Answer(Integer answerID, String answerText, boolean isCorrect, Integer questionID) {
        this.answerID = answerID;
        this.answerText = answerText;
        this.isCorrect = isCorrect;
        this.questionID = questionID;
    }

    public Integer getAnswerID() {
        return answerID;
    }

    public void setAnswerID(Integer answerID) {
        this.answerID = answerID;
    }

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

    public Integer getQuestionID() {
        return questionID;
    }

    public void setQuestionID(Integer questionID) {
        this.questionID = questionID;
    }   

}
