import { NOT_FOUND_ERROR } from "../../utils/errorHandler.js";

export const authTypeDefs = `

input LoginInput{
    email: String!,
    password: String!
}

input SignupInput{
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String!
}

type AuthPayload{
    token: String!,
    firstName: String!
    lastName: String!
    photo: String!
}

type Response{
    message: String
}

type Query{
    login(loginInput: LoginInput!): AuthPayload!
}


type Mutation{
    signup(signupInput: SignupInput!): Response!
}
`
export const authResolvers = {
    Query: {
        login: async(_, { loginInput } ,  { dataSources }) => {
            return dataSources.AccountAPI.login(loginInput);            
        }
    },
    Mutation: {
        signup: (_, { signupInput }, { dataSources }) => {
            async function fetchData(){
                return dataSources.AccountAPI.signup(signupInput);
            }

            return fetchData();
        }
    },
};