import { gql } from '@apollo/client';

export const login = gql`
mutation login($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;