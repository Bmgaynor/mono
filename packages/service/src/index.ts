import { ApolloServer } from "apollo-server";
import { typeDefs } from "./type-defs";
import { getSomeValue } from '@mono/lib'


const resolvers = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: {
    Query: () => ({
      books: () => {
        return [
          {
            id: 'book-1'
          },
          {
            id: 'book-2'
          }
        ]
      },
      book: (_, args) => ({
        id: args.bookId 
      })
    })
  },
  mockEntireSchema: false
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(getSomeValue())
});
