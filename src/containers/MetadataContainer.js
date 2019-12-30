import PropTypes from 'prop-types';
import React from 'react';
import { Location } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';

const MetadataContainer = ({ children }) => (
  <Location>
    {({ location }) => (
      <StaticQuery
        query={graphql`
          query {
            site {
              buildTime(formatString: "YYYY-MM-DD")
              siteMetadata {
                banner
                datePublished(formatString: "YYYY-MM-DD")
                description
                facebook
                instagram
                language
                local
                logo
                siteName
                url
              }
            }
          }
        `}
        render={({ site: { buildTime, siteMetadata } }) =>
          children({ ...siteMetadata, dateModified: buildTime, location })
        }
      />
    )}
  </Location>
);

MetadataContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MetadataContainer;
