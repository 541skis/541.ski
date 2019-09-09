import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex, Link } from 'rebass';
import { Facebook, Instagram } from 'react-feather';
import Content from '../Content';

const FooterItemLink = ({ icon, text, to }) => (
  <Box as="li" mx={3}>
    <Link
      href={to}
      sx={{
        alignItems: 'center',
        color: 'text',
        display: 'flex',
        fontSize: 1,
        letterSpacing: '0.075em',
        py: 3,
        textDecoration: 'none',
        textTransform: 'uppercase',
      }}
    >
      {icon} <Box ml={2}>{text}</Box>
    </Link>
  </Box>
);

FooterItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const Footer = () => (
  <Content my={5}>
    <Flex as="ul" justifyContent="center">
      <FooterItemLink
        icon={<Instagram />}
        text="Instagram"
        to="https://www.instagram.com/541skis/"
      />
      <FooterItemLink
        icon={<Facebook />}
        text="Facebook"
        to="https://www.facebook.com/541skis/"
      />
    </Flex>
  </Content>
);

export default Footer;
