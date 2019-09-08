import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, noIndex, title }) {
  return (
    <StaticQuery
      query={graphql`
        query DefaultSEOQuery {
          site {
            siteMetadata {
              description
              title
            }
          }
        }
      `}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        return (
          <Helmet
            htmlAttributes={{ lang }}
            meta={
              noIndex
                ? [{ content: 'noindex, follow', name: 'robots' }]
                : [
                    {
                      content: metaDescription,
                      name: 'description',
                    },
                    {
                      content: title,
                      property: 'og:title',
                    },
                    {
                      content: metaDescription,
                      property: 'og:description',
                    },
                    {
                      content: 'website',
                      property: 'og:type',
                    },
                    {
                      content: 'summary',
                      name: 'twitter:card',
                    },
                    {
                      content: title,
                      name: 'twitter:title',
                    },
                    {
                      content: metaDescription,
                      name: 'twitter:description',
                    },
                  ].concat(meta)
            }
            title={
              title
                ? `${data.site.siteMetadata.title} - ${title}`
                : data.site.siteMetadata.title
            }
          />
        );
      }}
    />
  );
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.shape({})),
  noIndex: PropTypes.bool,
  title: PropTypes.string,
};

Seo.defaultProps = {
  description: null,
  lang: 'en',
  meta: [],
  noIndex: false,
  title: null,
};

export default Seo;
