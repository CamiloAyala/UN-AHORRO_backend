import _ from 'lodash';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { authTypeDefs, authResolvers } from './auth/schema.js';
//import { authResolvers } from '../resolvers/auth/authResolver.js';

const typeDefs = [
    authTypeDefs
]

const resolvers = _.merge(
    authResolvers
)

export const schema = makeExecutableSchema ({ 
    typeDefs: typeDefs,
    resolvers: resolvers
});