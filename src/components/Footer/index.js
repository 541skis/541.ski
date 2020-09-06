import PropTypes from 'prop-types';
import React from 'react';
import { Box, Flex, Link } from 'rebass';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import Content from '../Content';

const FooterItemLink = ({ icon, text, to }) => (
  <Box as="li" mb={[4, null, 0]} mr={[null, null, 0]} mx={[null, null, 3]}>
    <Link
      href={to}
      sx={{
        alignItems: 'center',
        color: 'text',
        display: 'flex',
        fontSize: 1,
        fontWeight: 'bold',
        letterSpacing: '0.075em',
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
    <Flex
      alignItems="center"
      as="ul"
      flexDirection={['column', null, 'row']}
      justifyContent="center"
    >
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
      <FooterItemLink
        icon={<Linkedin />}
        text="LinkedIn"
        to="https://www.linkedin.com/company/541skis/"
      />
      <FooterItemLink
        icon={<Twitter />}
        text="Twitter"
        to="https://twitter.com/541skis/"
      />
    </Flex>
    <Box color="textSubtle" fontSize={1} mt={4} textAlign="center">
      &copy; 541 Sport LLC
    </Box>
  </Content>
);

export default Footer;
