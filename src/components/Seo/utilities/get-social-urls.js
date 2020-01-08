const getSocialUrls = ({ instagram, facebook, linkedin, twitter }) => {
  const socialUrls = [];
  if (instagram) socialUrls.push(`https://www.instagram.com/${instagram}`);
  if (facebook) socialUrls.push(`https://www.facebook.com/${facebook}`);
  if (linkedin) socialUrls.push(`https://www.linkedin.com/company/${linkedin}`);
  if (twitter) socialUrls.push(`https://twitter.com/${twitter}`);
  return socialUrls;
};

export default getSocialUrls;
