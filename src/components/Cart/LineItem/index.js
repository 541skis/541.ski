import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button, Flex, Heading, Text } from 'rebass';
import AppContext from '../../../context/AppContext';

const LineItem = ({ item }) => {
  const { removeItemFromCart } = useContext(AppContext);

  return (
    <Flex alignItems="center" justifyContent="space-between" pt={3}>
      <Flex alignItems="center" flexWrap="wrap" justifyContent="flex-start">
        <Heading mr={3}>{item.title}</Heading>
        <Text color="textSubtle" fontSize={1}>
          ({item.variant.selectedOptions.map(option => option.value)})
        </Text>
      </Flex>
      <Flex alignItems="center" flexWrap="wrap" justifyContent="flex-end">
        <Text>{item.quantity}x</Text>
        <Text fontWeight="bold" ml={3}>
          ${item.variant.price}
        </Text>
        <Button
          onClick={() => removeItemFromCart(item.id)}
          sx={{ color: 'primary', pr: 0, textDecoration: 'underline' }}
          variant="simple"
        >
          Remove
        </Button>
      </Flex>
    </Flex>
  );
};

LineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,
    title: PropTypes.string,
    variant: PropTypes.shape({
      price: PropTypes.string,
      selectedOptions: PropTypes.arrayOf(
        PropTypes.shape({ value: PropTypes.string })
      ),
    }),
  }).isRequired,
};

export default LineItem;
