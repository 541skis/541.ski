import React from 'react';
import { Text } from 'rebass';
import Content from '../components/Content';
import Header from '../components/Header';
import Seo from '../components/Seo';

const OurStoryPage = () => (
  <>
    <Seo title="Our Story" />
    <Header hero="Our Story" />
    <Content>
      <Text as="p" variant="paragraph">
        541 was started out necessity and a love of skiing. Owners, Brad Duffy
        and Jesse Scroggins, were born into ski racing roots which attributes to
        their desire to charge the mountain full tilt. In search for a ski to
        live up to their expectations as an &ldquo;all mountain&rdquo;
        one-quiver, they were consistently left disappointed. So, Brad, designer
        and production engineer, and Jesse, craftsman and amateur designer,
        teamed up to create a ski to fill the void. The Adobo was
        born&mdash;541&rsquo;s flagship ski. Every design is built, tested and
        proven on the year-round slopes of Mt. Hood, OR by the owners. If we
        don&rsquo;t like it, we don&rsquo;t make it! Try a pair and push as hard
        as you can. 541 skis will not let you&nbsp;down.
      </Text>
    </Content>
  </>
);

export default OurStoryPage;
