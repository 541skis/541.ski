import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, Text } from 'rebass';
import { graphql } from 'gatsby';
import Content from '../Content';
import Header from '../Header';
import ProductForm from '../ProductForm';
import Seo from '../Seo';

const ProductPage = ({ data: { shopifyProduct: product } }) => (
  <>
    <Seo title={product.title} />
    <Header hero={product.title} />
    <Content pb={5}>
      <Text
        as="p"
        dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        variant="intro"
      />
    </Content>
    <Content>
      <ProductForm product={product} />
      {product.images.map(image => (
        <Card key={image.id} variant="card.dark">
          <Image
            alt={product.title}
            fluid={image.localFile.childImageSharp.fluid}
          />
        </Card>
      ))}
    </Content>
  </>
);

ProductPage.propTypes = {
  data: PropTypes.shape({
    shopifyProduct: PropTypes.shape({
      descriptionHtml: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          localFile: PropTypes.shape({
            childImageSharp: PropTypes.shape({}),
          }),
        })
      ),
      title: PropTypes.string,
    }),
  }).isRequired,
};

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      descriptionHtml
      handle
      id
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        originalSrc
      }
      options {
        id
        name
        values
      }
      productType
      shopifyId
      title
      variants {
        availableForSale
        id
        price
        selectedOptions {
          name
          value
        }
        shopifyId
        title
      }
    }
  }
`;

export default ProductPage;
