import { gql } from "@apollo/client";

export const QUERY_GET_ADVICE = gql`
  query getAnAdvice {
    getAdvice {
      advice
      id
    }
  }
`;
