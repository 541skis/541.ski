import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Button } from 'rebass';
import AppContext from '../../../context/AppContext';

const LineItem = ({ item }) => {
  const { removeItemFromCart } = useContext(AppContext);

  return (
    <>
      <img
        alt={`${item.title} product shot`}
        height="60px"
        src={item.variant.image.src}
      />
      <p>
        {item.title} {item.variant.title || ''}
      </p>
      <div>
        {item.variant.selectedOptions.map(
          option => `${option.name}: ${option.value} `
        )}
      </div>
      <div>{item.quantity}</div>
      <Button onClick={() => removeItemFromCart(item.id)}>Remove</Button>
    </>
  );
};

LineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,
    title: PropTypes.string,
    variant: PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
      }),
      selectedOptions: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.string,
        })
      ),
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default LineItem;
