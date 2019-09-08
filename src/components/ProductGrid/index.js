import Image from 'gatsby-image';
import React from 'react';
import { Box, Card, Flex, Heading } from 'rebass';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ProductGrid = () => (
  <Flex flexWrap="wrap" justifyContent="center" mb={-5} mx={-3}>
    {useStaticQuery(
      graphql`
        query {
          allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
            edges {
              node {
                id
                title
                handle
                createdAt
                images {
                  id
                  originalSrc
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                      }
                    }
                  }
                }
                variants {
                  price
                }
              }
            }
          }
        }
      `
    ).allShopifyProduct.edges.map(({ node: product }) => (
      <Box key={product.id} mb={5} px={3} width={[1, null, 1 / 3]}>
        <Card as={Link} to={`/${product.handle}`} variant="card">
          <Heading as="h3" p={4} textAlign="center">
            {product.title}
          </Heading>
          <Image
            alt={product.title}
            fluid={product.images[0].localFile.childImageSharp.fluid}
          />
        </Card>
      </Box>
    ))}
  </Flex>
);

export default ProductGrid;
