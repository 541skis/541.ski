import AWS from 'aws-sdk';
import { useEffect, useState } from 'react';

const useStream = (streamName) => {
  const [streamError, setStreamError] = useState(null);
  const [streamIsLoading, setStreamIsLoading] = useState(true);
  const [streamUrl, setStreamUrl] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const options = {
          accessKeyId: 'AKIAYUXXAGMU2NNLWMGC',
          region: 'us-west-2',
          secretAccessKey: '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',
        };

        const kinesisVideo = new AWS.KinesisVideo(options);

        const { DataEndpoint } = await kinesisVideo
          .getDataEndpoint({
            APIName: 'GET_HLS_STREAMING_SESSION_URL',
            StreamName: streamName,
          })
          .promise();

        const kinesisVideoArchivedContent = new AWS.KinesisVideoArchivedMedia({
          ...options,
          endpoint: new AWS.Endpoint(DataEndpoint),
        });

        const {
          HLSStreamingSessionURL,
        } = await kinesisVideoArchivedContent
          .getHLSStreamingSessionURL({ StreamName: streamName })
          .promise();

        setStreamUrl(HLSStreamingSessionURL);
      } catch (e) {
        setStreamError(e.message);
      }

      setStreamIsLoading(false);
    })();
  }, []);

  return { streamError, streamIsLoading, streamUrl };
};

export default useStream;
