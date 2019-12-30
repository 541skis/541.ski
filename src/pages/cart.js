import React from 'react';
import Cart from '../components/Cart';
import Content from '../components/Content';
import Header from '../components/Header';
import Seo from '../components/SEO';

const CartPage = () => (
  <>
    <Seo noIndex title="Cart" />
    <Header hero="Cart" mb={4} />
    <Content>
      <Cart />
    </Content>
  </>
);

export default CartPage;
