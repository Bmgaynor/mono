import { gql } from "apollo-server";

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String!
    """
      @deprecated(reason: "Use \`author\`")
    """
    authorName: String!
    author: Author!
    coAuthor: Author
  }
  
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    book(bookId: ID!): Book!
    books: [Book!]!
    author(authorId: ID!): Author!
  }
`;
