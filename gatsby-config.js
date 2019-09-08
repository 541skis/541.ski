const { resolve } = require('path');

const shopifyAccessToken = '6b21f56fb087d8843f03f0f240c470b8';
const shopifyShopName = '541-skis';

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-layout',
      options: { component: resolve('src/components/Layout') },
    },
    {
      options: {
        fonts: ['Lora:700', 'Open Sans:400,700'],
        display: 'swap',
      },
      resolve: 'gatsby-plugin-google-fonts',
    },
    {
      options: { rule: { include: /images/ } },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        stores: {
          store: {
            domain: `${shopifyShopName}.myshopify.com`,
            storefrontAccessToken: shopifyAccessToken,
          },
        },
      },
      resolve: 'gatsby-plugin-shopify-buy',
    },
    {
      options: {
        background_color: '#fbf9fa',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
        name: '541 Skis',
        short_name: '541',
        start_url: '/',
        theme_color: '#a80038',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    {
      options: { name: 'images', path: 'src/images' },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        accessToken: shopifyAccessToken,
        shopName: shopifyShopName,
      },
      resolve: 'gatsby-source-shopify',
    },
  ],
  siteMetadata: {
    description:
      '541 skis are designed with a basic philosophy—ski all conditions and terrain with confidence and power. 541 skis are a true one quiver ski.',
    title: '541 Skis',
  },
};
