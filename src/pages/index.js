import React from 'react';
import { Text } from 'rebass';
import Content from '../components/Content';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Seo from '../components/SEO';

const IndexPage = () => (
  <>
    <Seo title="541 Skis — Shred both piste and powder" />
    <Header hero={<>One&nbsp;Mountain&mdash;One&nbsp;Ski</>} />
    <Content pb={5}>
      <Text as="p" variant="intro">
        541 skis are designed with a basic philosophy: ski all conditions and
        terrain with confidence and power. These are truly
        one&#8209;quiver&nbsp;skis.
      </Text>
    </Content>
    <Content>
      <ProductGrid />
    </Content>
  </>
);

export default IndexPage;
