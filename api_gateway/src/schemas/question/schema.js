export const questionTypeDefs = `
type Question{
    questionID: Int!,
    questionLevel: Int!,
    questionText: String!,
    questionType: String!,
    answers: [Answer]!
}

type Answer{
    answerID: Int!,
    answerText: String!,
    correct: Boolean!,
}

type Query{
    getQuestions(level: Int!): [Question]!
    getAnswers(questionID: Int!): [Answer]!
}

`

export const questionResolvers = {
    Query: {
        getQuestions: async(_, { level } ,  { dataSources }) => {
            let questions = await dataSources.QuestionAPI.getQuestions(level);
            if(questions.length > 0){
                for(let i = 0; i < questions.length; i++){
                    let answers = await dataSources.QuestionAPI.getAnswers(questions[i].questionID);
                    questions[i].answers = answers;
                }
            }

            return questions;
        },
        getAnswers: async(_, { questionID } ,  { dataSources }) => {
            return dataSources.QuestionAPI.getAnswers(questionID);            
        }
    }
};