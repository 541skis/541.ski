import PropTypes from 'prop-types';
import React from 'react';
import GenericTags from './GenericTags';
import MetadataContainer from '../../containers/MetadataContainer';
import OpenGraphTags from './OpenGraphTags';
import StructuredData from './StructuredData';
import TwitterTags from './TwitterTags';
import getSiteTitle from './utilities/get-site-title';
import getSocialUrls from './utilities/get-social-urls';
import getStructuredBreadcrumbs from './utilities/get-structured-breadcrumbs';
import ref from './utilities/ref';

const SEO = ({ product, ...overrides }) => (
  <MetadataContainer>
    {({ location, ...siteMetadata }) => {
      const data = { ...siteMetadata, ...overrides };
      const canonicalUrl = `${data.url}${location.pathname}`;
      const bannerUrl = `${data.url}${data.banner}`;
      const logoUrl = `${data.url}${data.logo}`;
      const organizationId = `${data.url}#organization`;

      return (
        <>
          <GenericTags
            author={siteMetadata.siteName}
            description={data.description}
            language={data.language}
            title={getSiteTitle(location.pathname, data.siteName, data.title)}
            url={canonicalUrl}
          />
          <StructuredData
            about={siteMetadata.description}
            author={ref('Organization', organizationId)}
            id={siteMetadata.url}
            inLanguage={siteMetadata.language}
            type="WebSite"
          />
          <StructuredData
            id={organizationId}
            logo={{ '@type': 'ImageObject', url: logoUrl }}
            name={siteMetadata.siteName}
            sameAs={getSocialUrls(siteMetadata)}
            type="Organization"
            url={siteMetadata.url}
          />
          {!!product && (
            <StructuredData
              description={product.description}
              id={`${data.url}#${product.sku}`}
              image={`${data.url}${product.imagePath}`}
              name={product.name}
              offers={{
                '@type': 'Offer',
                availability: `https://schema.org/${
                  product.available ? 'InStock' : 'SoldOut'
                }`,
                price: product.price,
                priceCurrency: 'USD',
                seller: ref('Organization', organizationId),
                url: canonicalUrl,
              }}
              sku={product.sku}
              type="Product"
            />
          )}
          {!product && (
            <StructuredData
              author={ref('Organization', organizationId)}
              dateModified={data.dateModified}
              datePublished={data.datePublished}
              description={data.description}
              headline={data.title}
              id={canonicalUrl}
              image={bannerUrl}
              inLanguage={siteMetadata.language}
              mainEntityOfPage={canonicalUrl}
              publisher={ref('Organization', organizationId)}
              type="WebPage"
              url={canonicalUrl}
            />
          )}
          <StructuredData
            id={`${data.url}#breadcrumbs`}
            itemListElement={getStructuredBreadcrumbs({
              canonicalUrl,
              isProduct: !!product,
              location,
              siteName: data.siteName,
              title: data.title,
              url: data.url,
            })}
            type="BreadcrumbList"
          />
          <OpenGraphTags
            description={data.description}
            image={bannerUrl}
            locale={data.local}
            name={siteMetadata.title}
            title={data.title}
            type="website"
            url={canonicalUrl}
          />
          <TwitterTags
            description={data.description}
            image={bannerUrl}
            title={data.title}
          />
        </>
      );
    }}
  </MetadataContainer>
);

SEO.propTypes = {
  product: PropTypes.shape({
    available: PropTypes.bool,
    description: PropTypes.string,
    imagePath: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    sku: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  product: null,
};

export default SEO;
