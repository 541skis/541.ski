import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Box, Button, Card, Flex, Text } from 'rebass';
import { Link, graphql } from 'gatsby';
import AppContext from '../../context/AppContext';
import Content from '../Content';
import Header from '../Header';
import Seo from '../Seo';
import VariantSelector from './VariantSelector';

const ProductPage = ({ data: { shopifyProduct: product } }) => {
  const { addItemToCart } = useContext(AppContext);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [variant, setVariant] = useState(product.variants[0]);

  return (
    <>
      <Seo title={product.title} />
      <Header hero={product.title} />
      <Content>
        <Text
          as="p"
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          pb={5}
          variant="intro"
        />
        <Flex
          flexDirection={['column', null, 'row']}
          justifyContent="space-between"
          mb={5}
        >
          {product.options.map(option => (
            <VariantSelector
              key={option.id.toString()}
              onChange={({ target }) =>
                setVariant(product.variants.find(v => v.title === target.value))
              }
              option={option}
            />
          ))}
          <Flex alignItems="center" justifyContent="flex-end" mt={[3, null, 1]}>
            <Text fontWeight="bold" mr={3}>
              ${variant.price}
            </Text>
            {variant.availableForSale ? (
              <Button
                disabled={adding}
                onClick={async () => {
                  setAdding(true);
                  await addItemToCart(variant.shopifyId);
                  setAdding(false);
                  setAdded(true);
                }}
                type="button"
              >
                {adding ? 'Adding...' : 'Add to Cart'}
              </Button>
            ) : (
              <p>Currently out of stock.</p>
            )}
            {added && (
              <Box as={Link} ml={3} to="/cart" variant="link">
                View Cart
              </Box>
            )}
          </Flex>
        </Flex>
        {variant.image ? (
          <Card variant="card.dark">
            <Image fluid={variant.image.localFile.childImageSharp.fluid} />
          </Card>
        ) : (
          product.images.map(image => (
            <Card key={image.id} variant="card.dark">
              <Image fluid={image.localFile.childImageSharp.fluid} />
            </Card>
          ))
        )}
      </Content>
    </>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    shopifyProduct: PropTypes.shape({
      descriptionHtml: PropTypes.string,
      handle: PropTypes.string,
      id: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          localFile: PropTypes.shape({ childImageSharp: PropTypes.shape({}) }),
        })
      ),
      options: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          values: PropTypes.arrayOf(PropTypes.string),
        })
      ),
      productType: PropTypes.string,
      shopifyId: PropTypes.string,
      title: PropTypes.string,
      variants: PropTypes.arrayOf(
        PropTypes.shape({
          availableForSale: PropTypes.bool,
          id: PropTypes.string,
          image: PropTypes.shape({
            localFile: PropTypes.shape({
              childImageSharp: PropTypes.shape({}),
            }),
          }),
          price: PropTypes.string,
          selectedOptions: PropTypes.arrayOf(
            PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
          ),
          shopifyId: PropTypes.string,
          title: PropTypes.string,
        })
      ),
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
        image {
          id
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
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
