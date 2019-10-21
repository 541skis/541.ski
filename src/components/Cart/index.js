import React, { useContext, useState } from 'react';
import { Button, Card, Flex, Link, Text } from 'rebass';
import { Link as GatsbyLink } from 'gatsby';
import AppContext from '../../context/AppContext';
import LineItem from './LineItem';

const Cart = () => {
  const { cart } = useContext(AppContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (cart.isLoading) return null;

  if (!cart.lineItems.length) {
    return (
      <Text variant="intro">
        It&rsquo;s empty!{' '}
        <Link as={GatsbyLink} to="/">
          View products
        </Link>
      </Text>
    );
  }

  return (
    <>
      <Card pb={3} px={3} variant="card.light">
        {cart.lineItems.map(item => (
          <LineItem key={item.id} item={item} />
        ))}
      </Card>
      <Flex justifyContent="flex-end" pt={4}>
        <Button
          disabled={isCheckingOut}
          onClick={() => {
            setIsCheckingOut(true);
            window.location = cart.webUrl;
          }}
        >
          {isCheckingOut ? 'Redirecting...' : 'Check Out'}
        </Button>
      </Flex>
    </>
  );
};

export default Cart;
