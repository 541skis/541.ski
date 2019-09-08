import React from 'react';
import { Text } from 'rebass';
import Content from '../components/Content';
import Header from '../components/Header';
import Seo from '../components/Seo';

const CartPage = () => (
  <>
    <Seo title="Our Story" />
    <Header hero="Our Story" />
    <Content>
      <Text as="p" variant="paragraph">
        541 was started out necessity and a love of skiing. Owners, Brad Duffy
        and Jesse Scroggins, were born of ski racing roots which attributes to
        their desire charge the mountain full tilt. Finding a ski to live up to
        the expectations as an &ldquo;all mountain&rdquo; one quiver ski never
        lived up to the hype. So, Brad, designer and production engineer, and
        Jesse, craftsman and amateur designer, teamed up to create a ski to fill
        the void. The Adobo was born, the flagship of 541 designs. Every design
        is built, tested and proven on the year-round slopes of Mt. Hood, OR by
        the owners. If we don’t like it, we don’t make it! Try a pair and push
        as hard as you can. 541 skis will not let you down.
      </Text>
    </Content>
  </>
);

export default CartPage;
