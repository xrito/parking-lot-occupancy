# 🚘 Parking Lot Occupancy Detection  
Parking lot occupancy detection is an open-source solution uses deep
learning algorithms that process the real-time video stream
of common surveillance or IP cameras. 
General surveillance and parking lot occupancy detection can be performed simultaneously.

Deep learning models are used to determine the occupancy of parking spaces 
from images obtained by surveillance cameras.
Such deep neural networks achieve high accuracy and applicability in real-time environments.

[Example](https://user-images.githubusercontent.com/2115607/203495578-95cd8289-9260-4bfd-8514-1fb46f9ea1bd.webm)
## Key Features

Real-time parking lot occupancy detection allows decentralized processing for public and private parking facilities.

- Detection vehicles in pre-defined parking slots.
- The system checks the availability of parking slots in real-time.
- Deep learning methods are robust enough to operate with multiple weather conditions and challenging daylight
  situations.
 
## How to use

App is made up of the following components:
- Redis - Message broker for communication between camera and backend services
- Mongo - Application storage. Stores information about parking and marking parking spaces
- Backend - Web interface for managing parking lots and cameras
- Http - Web server
- Deepstack - Vehicle Detection API
- Prediction Worker - Worker that processes images from camera and sends predictions to UI
- Camera - Converts RTSP stream to MJPEG for streaming in browser

## Running

App runs on Docker. To install App, simply run:

For production: 
```
$ docker-compose -f docker-compose.yml up -d 
```

For development:
```
$ docker-compose up -d
```

Thats it! Wait for the following services to appear as Running or Healthy:
- http
- camera
- redis
- deepstack
- backend
- prediction-worker

## Report Issues
In case you are experiencing a bug or want to request a new feature head over to the [Parking Lot Occupancy Detection monorepo issue tracker](https://github.com/powernic/parking-lot-occupancy/issues)

## License
[MIT license](LICENSE)
