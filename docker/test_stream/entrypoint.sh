#!/bin/sh
set -e

exec /app/rtsp-simple-server & ffmpeg -re -stream_loop -1 -i "/app/video/${STREAM_VIDEO}"  -c copy -f rtsp -rtsp_transport tcp "rtsp://localhost/${STREAM_NAME}"
