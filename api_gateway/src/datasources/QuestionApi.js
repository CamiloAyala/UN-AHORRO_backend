import { RESTDataSource } from "@apollo/datasource-rest";
import axios from "axios";

export class QuestionAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://34.170.7.111:8080";
    }

    async getQuestions(level) {
        const response = await axios.get(this.baseURL + '/questions?level=' + level);
        return response.data;
    }

    async getAnswers(questionID) {
        return this.get(`questions/${encodeURIComponent(questionID)}/answers`);
    }
}