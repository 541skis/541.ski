import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = ({ id, type, ...data }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'http://schema.org',
        '@id': id,
        '@type': type,
        ...data,
      })}
    </script>
  </Helmet>
);

StructuredData.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'Article',
    'BreadcrumbList',
    'Organization',
    'Person',
    'Product',
    'WebPage',
    'WebSite',
  ]).isRequired,
};

export default StructuredData;
