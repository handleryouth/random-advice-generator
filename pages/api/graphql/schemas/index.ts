import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type AdviceResponseProperties {
    id: String!
    advice: String!
  }
  type Query {
    getAdvice: AdviceResponseProperties
  }
`;
