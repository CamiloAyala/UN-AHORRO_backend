import { GraphQLError } from "graphql";

export const NOT_FOUND_ERROR = (message) => {
    throw new GraphQLError (message, {
        extensions: {
            code: 'NOT_FOUND',
            http: {
                status: 404,
            }
        }
    })
}