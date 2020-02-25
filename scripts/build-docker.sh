#!/bin/bash
cd ..
dir=${PWD##*/}  
docker-compose build
docker run -p 4000:4000 -d "$dir_app"
docker run -p 3000:3000 -d "$dir_client"