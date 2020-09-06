import React from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { Text } from 'rebass';
import Content from '../components/Content';
import Header from '../components/Header';
import Seo from '../components/Seo';
import useStream from '../effects/use-stream';

const StreamsPage = () => {
  const { streamError, streamIsLoading, streamUrl } = useStream('mountain-cam');

  return (
    <>
      <Seo title="Live Streams" />
      <Header hero="Live Streams" />
      <Content>
        {streamIsLoading && (
          <Text as="p" variant="intro">
            Loading streams&hellip;
          </Text>
        )}
        {streamError && (
          <Text as="p" variant="intro">
            Streams unavailable.
          </Text>
        )}
        {streamUrl && (
          <ReactHlsPlayer
            autoplay={false}
            controls
            height="auto"
            url={streamUrl}
            width="100%"
          />
        )}
      </Content>
    </>
  );
};

export default StreamsPage;
