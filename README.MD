# Minor Choice portal

[![Build Status](https://travis-ci.org/john-ghatas/sfs-hackaton.svg?branch=development)](https://travis-ci.org/john-ghatas/sfs-hackaton)

This repository contains the Minor Choice webapp created in the hackaton of Software for Science.

<h3>Pre-requisites</h3>

- Docker

- Docker compose

- Node.js

- Bash CLI

- **One of the following operating systems**
  - Linux
  - Unix
  - Windows 10 **Pro**

<h3>Running the application locally</h3>

To run the application locally, open 2 command prompts. Start in the root directory of the project when executing these commands.

**Starting the backend**

Before running these commands, create a file called `.env`in the app directory.

```bash
cd app
touch .env
```

Populate the .env file with the following template:

```
DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
```

Then enter the corresponding values without enclosing quotation marks. They are respectively the hostname, port, username and password for a MariaDB server. The database name should be `sfs`. Afterwards, the backend can be run. Please note that **npm install** is only required on a change in the package.json or on the first start in both the app and client.

```bash
npm install
npm start
```

**Starting the frontend**

The frontend does not require any configuration. Run the commands below to run the frontend locally.

```bash
cd client
npm install
npm start
```

---

**You are now able to access the frontend on port 3000 and the API on port 4000**

---

<h3>Deploying the Docker container</h3>

Before proceeding to deploying the Docker containers, make sure the folder name in which your local repository resides is called **sfs-hackaton**.

To build the Docker images and start them, run the following commands from the root directory of the project.

```bash
cd scripts
./build-docker.sh
```

<h3>Stopping the Docker container</h3>

To redeploy the containers, stopping the Docker containers is required. You can stop the Docker containers any time you wish if you're not redeploying.

Change your directory to **scripts** from the root directory and run the stop script.

```bash
cd scripts
./stop-docker.sh
```
