import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Box, Button, Flex, Text } from 'rebass';
import { Link } from 'gatsby';
import AppContext from '../../context/AppContext';
import VariantSelector from './VariantSelector';

const ProductForm = ({ product }) => {
  const { addItemToCart } = useContext(AppContext);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const [variant, setVariant] = useState(product.variants[0]);

  return (
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
        {added && (
          <Box as={Link} ml={3} to="/cart" variant="link">
            View Cart
          </Box>
        )}
        {!variant.availableForSale && <p>This Product is out of Stock!</p>}
      </Flex>
    </Flex>
  );
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string, originalSrc: PropTypes.string })
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
        price: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
        ),
        shopifyId: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ProductForm;
