import { gql } from '@apollo/client';

export const product = gql`
query getproduct($category: String!) {
    products(search: "", filter: {
        category_id: {
          eq: $category
        }
      }) {
        items {
          name
        }
      }
}
`;