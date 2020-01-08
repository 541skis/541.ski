const { resolve } = require('path');

const shopifyAccessToken = '6b21f56fb087d8843f03f0f240c470b8';
const shopifyShopName = '541-skis';

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      options: { component: resolve('src/components/Layout') },
      resolve: 'gatsby-plugin-layout',
    },
    {
      options: {
        display: 'swap',
        fonts: ['Lora:700', 'Open Sans:400,700'],
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
    banner: '/images/banner.png',
    datePublished: '2020-01-01',
    description:
      '541 skis are designed with a basic philosophy: ski all conditions and terrain with confidence and power. These are truly one-quiver skis.',
    facebook: '541skis',
    instagram: '541skis',
    language: 'en',
    linkedin: '541skis',
    local: 'en_US',
    logo: '/images/logo.png',
    siteName: '541 Skis',
    twitter: '541skis',
    url: 'https://541.ski',
  },
};
