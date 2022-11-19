import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { AccountAPI } from './datasources/AccountApi.js';
import { schema } from './schemas/schemas.js';

const server = new ApolloServer({
    schema: schema,
    dataSources: () => {
        return {
            AccountAPI: new AccountAPI()
        }
    }
    
});

const { url } = await startStandaloneServer(server,{
    listen: { port: 4000},
    context: async () => {
        const { cache } = server;
        return {
            dataSources: {
                AccountAPI: new AccountAPI({ cache })
            }
        }
    }
});

console.log(`🚀  Server ready at: ${url}`);
