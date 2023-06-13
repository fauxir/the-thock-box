import { gql, GraphQLClient } from "graphql-request";

const storefrontAccessToken = process.env.STOREFRONTACCESSTOKEN;

const endpoint = process.env.SHOPURL

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
    },
  });


export async function getProducts() {
  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;
}
//Then, use the query to make the API request.
export async function getProducts() {
  const getAllProductsQuery = gql`
   // Omitted for brevity
  `;
  try {
    return await graphQLClient.request(getAllProductsQuery);
  } catch (error) {
    throw new Error(error);
  }
}