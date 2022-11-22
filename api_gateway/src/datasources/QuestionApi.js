import { RESTDataSource } from "@apollo/datasource-rest";

export class QuestionAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://34.170.7.111:8080";
    }

    async getQuestions(level) {
        console.log("Level: " + level);
        return this.get(`/questions?level=${level}`);
    }

    async getAnswers(questionID) {
        return this.get(`questions/${encodeURIComponent(questionID)}/answers`);
    }
}