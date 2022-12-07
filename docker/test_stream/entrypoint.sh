#!/bin/sh
set -e

exec /app/rtsp-simple-server & ffmpeg -re -stream_loop -1 -i /app/video.mp4  -c copy -f rtsp -rtsp_transport tcp rtsp://localhost:8554/mystream
