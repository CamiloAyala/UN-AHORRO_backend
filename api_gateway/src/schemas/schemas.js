import _ from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { authTypeDefs, authResolvers } from './auth/schema.js';
import { questionTypeDefs, questionResolvers } from './question/schema.js';

const typeDefs = [
    authTypeDefs,
    questionTypeDefs
]

const resolvers = _.merge(
    authResolvers,
    questionResolvers,
)

export const schema = makeExecutableSchema ({ 
    typeDefs: typeDefs,
    resolvers: resolvers
});