# 541.ski

> One mountain—one ski.

## Development Setup

1. install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git),
   [Node](https://nodejs.org/en/download) &
   [Yarn](https://yarnpkg.com/lang/en/docs/install)
2. install project dependencies: `yarn`
3. start the development server: `yarn start`

## Stream Setup Notes

```shell
git clone https://github.com/awslabs/amazon-kinesis-video-streams-producer-sdk-cpp
cd amazon-kinesis-video-streams-producer-sdk-cpp
mkdir build
cd build
cmake -DBUILD_GSTREAMER_PLUGIN=ON ..
make
gst-inspect-1.0 kvssink
```

```shell
#!/usr/bin/env bash

export GST_PLUGIN_PATH=/home/pi/amazon-kinesis-video-streams-producer-sdk-cpp/build
export LD_LIBRARY_PATH=/home/pi/amazon-kinesis-video-streams-producer-sdk-cpp/open-source/local/lib

while :; do
  gst-launch-1.0 \
    rtspsrc \
      location=rtsp://[name]:[pass]@[ip]/live \
    ! rtph264depay \
    ! h264parse \
    ! kvssink \
      stream-name="" \
      secret-key="" \
      access-key="" \
      aws-region="us-west-2"
  sleep 10
done
```
