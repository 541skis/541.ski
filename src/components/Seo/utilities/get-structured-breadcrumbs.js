const getStructuredBreadcrumbs = ({
  canonicalUrl,
  isProduct,
  location,
  siteName,
  title,
  url,
}) => {
  const breadcrumbItems = [
    { '@type': 'ListItem', item: url, name: siteName, position: 1 },
  ];

  if (isProduct) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      item: url,
      name: 'Products',
      position: 2,
    });

    breadcrumbItems.push({
      '@type': 'ListItem',
      item: canonicalUrl,
      name: title,
      position: 3,
    });

    return breadcrumbItems;
  }

  if (location.pathname !== '/') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      item: canonicalUrl,
      name: title,
      position: 2,
    });

    return breadcrumbItems;
  }

  return breadcrumbItems;
};

export default getStructuredBreadcrumbs;
