export const questionTypeDefs = `
type Question{
    questionID: Int!,
    questionLevel: Int!,
    questionText: String!,
    questionType: String!,
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
            return dataSources.QuestionAPI.getQuestions(level);            
        },
        getAnswers: async(_, { questionID } ,  { dataSources }) => {
            return dataSources.QuestionAPI.getAnswers(questionID);            
        }
    }
};