const getSocialUrls = ({ instagram, facebook }) => {
  const socialUrls = [];
  if (instagram) socialUrls.push(`https://www.instagram.com/${instagram}`);
  if (facebook) socialUrls.push(`https://www.facebook.com/${facebook}`);
  return socialUrls;
};

export default getSocialUrls;
