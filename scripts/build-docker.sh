#!/bin/bash
cd ..
docker-compose build
docker run -p 4000:4000 -d hackaton_app
docker run -p 3000:3000 -d hackaton_client