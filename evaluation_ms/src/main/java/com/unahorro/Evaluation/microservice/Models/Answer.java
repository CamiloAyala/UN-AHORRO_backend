package com.unahorro.Evaluation.microservice.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @JsonIgnore
    private Question question;

    public Answer() {
        super();
    }

    public Answer(Integer answerID, String answerText, boolean isCorrect, Question question) {
        this.answerID = answerID;
        this.answerText = answerText;
        this.isCorrect = isCorrect;
        this.question = question;
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

    public Question getQuestion() {
        return question;
    }

    public void setQuestionID(Question question) {
        this.question = question;
    }   

}
