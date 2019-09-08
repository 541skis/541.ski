import PropTypes from 'prop-types';
import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { withStoreContext } from 'gatsby-plugin-shopify-buy';
import AppContext from '../../context/AppContext';
import Footer from '../Footer';
import theme from '../../utilities/theme';
import { IS_BROWSER, STORAGE_SHOPIFY_CART_ID } from '../../utilities/constants';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    storeContext: PropTypes.shape({
      client: PropTypes.shape({
        checkout: PropTypes.shape({
          addLineItems: PropTypes.func,
          create: PropTypes.func,
          fetch: PropTypes.func,
          removeLineItems: PropTypes.func,
          updateLineItems: PropTypes.func,
        }),
      }),
    }).isRequired,
  };

  state = {
    cart: {
      lineItems: [],
      subtotalPrice: null,
      totalPrice: null,
      totalTax: null,
      webUrl: null,
    },
  };

  async componentDidMount() {
    const { storeContext } = this.props;

    const cartId = IS_BROWSER
      ? localStorage.getItem(STORAGE_SHOPIFY_CART_ID)
      : null;

    let cart;

    if (cartId) {
      cart = await storeContext.client.checkout.fetch(cartId);
    }

    if (!cart || cart.completedAt) {
      cart = await storeContext.client.checkout.create();
    }

    if (IS_BROWSER) {
      localStorage.setItem(STORAGE_SHOPIFY_CART_ID, cart.id);
    }

    this.setState({ cart });
  }

  addItemToCart = async (id, quantity = 1) => {
    const { storeContext } = this.props;
    const { cart } = this.state;

    this.setState({
      cart: await storeContext.client.checkout.addLineItems(cart.id, [
        { quantity, variantId: id },
      ]),
    });
  };

  removeItemFromCart = async id => {
    const { storeContext } = this.props;
    const { cart } = this.state;

    this.setState({
      cart: await storeContext.client.checkout.removeLineItems(cart.id, [id]),
    });
  };

  updateItemInCart = async (id, quantity = 1) => {
    const { storeContext } = this.props;
    const { cart } = this.state;

    this.setState({
      cart: await storeContext.client.checkout.updateLineItems(cart.id, [
        { id, quantity },
      ]),
    });
  };

  render() {
    const { children } = this.props;
    const { cart } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            addItemToCart: this.addItemToCart,
            cart,
            removeItemFromCart: this.removeItemFromCart,
            updateItemInCart: this.updateItemInCart,
          }}
        >
          <Global
            styles={css`
              ${emotionReset}

              html {
                color: ${theme.colors.text};
                font-family: ${theme.fonts.body};
                font-weight: ${theme.fontWeights.body};
                line-height: ${theme.lineHeights.body};
                fill: currentColor;
              }

              body {
                background-color: ${theme.colors.background};
              }

              a {
                color: inherit;
                text-decoration: none;
              }
            `}
          />
          {children}
          <Footer />
        </AppContext.Provider>
      </ThemeProvider>
    );
  }
}

export default withStoreContext(Layout);
