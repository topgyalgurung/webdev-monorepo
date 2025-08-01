

## Basics

- cross-platform inconsistencies (e.g. Windows and macOS) can lead to additional issues during development and deployment

- Container: Develop and run the application inside an isolated environment
- image: Put your application inside a single file along with dependencies and necessary deployment configurations
- registry: share image through central server
  
- Your teammates will then be able to download the image from the registry
- putting your applications inside a self-contained package, making it portable and reproducible across various environments.


### Docker Basics 

- Container: 
  - virtualize the host operating system only
  - virtual machine comes with its own guest OS as heavy as host OS while containers utilizes host OS (eliminating guest OS layer, so lighter and less resource hogging)

- Docker image:
  - frozen, read-only copy of a container can be exchanged through registries 
  

- Docker registry:
  - centralized place where you can upload your images and can also download images created by others
  - Docker Hub: default public registry for Docker

### DOCKER ARCHITECTURE

The engine consist of 3 main components

1. Docker Daemon (dockerd): 
   - running in the background and waits for commands from the client

2. Docker Client (docker): 
- command-line interface program mostly responsible for transporting commands issued by users

3. REST API

"Docker uses a client-server architecture. The Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers" - Official Docs


#### Container Manipulation 

- general syntax to create and start container 
```bash
docker run <image name> 
```
- better way to run:
```bash
  - docker <object> <command> <options>
  - docker container run <image name>  
  - docker container run --publish 8080:80 fhsinchy/hello-dock
```
##### publish a port:
  - Containers are isolated environments. Your host system doesn't know anything about what's going on inside a container.
  - To allow access from outside of a container, you must publish the appropriate port inside the container to a port on your local network.
```bash   
    --publish <host port>:<container port>
```
  - When you wrote --publish 8080:80 in the previous sub-section, it meant any request sent to port 8080 of your host system will be forwarded to port 80 inside the container‌
    - Now to access the application on your browser, visit http://127.0.0.1:8080.

  ##### use detached mode:
  - in example above, closing terminal window stops running container is default behavior.
  - to override this behavior and keep it running in the background
    - can include --detach 
      - $ docker container run --detach --publish 8080:80 fhsinchy/hello-dock

- to list containers
  - $ docker container ls 

##### name or rename container 
    - Container has two identifiers: CONTAINER ID and NAME
  - to name: --name 
  - e.g.  To run another container using the fhsinchy/hello-dock image with the name hello-dock-container you can execute the following command:
    - $ docker container run --detach --publish 8888:80 --name hello-dock-container fhsinchy/hello-dock
  - rename old container using container rename 


##### stop or kill running container 
- containers running in the background can be stopped or ckilled using 
  - $ docker container stop <container identifier>
  - $ docker container kill hello-dock-container-2

- to restart stopped/killed container
  - $ docker container start <container identifier>
- container start starts any container in detached mode by default and retains any port configurations made previously
- to reboot running container (restart stop and starts it back up again)
  - docker container restart hello-dock-container-2


### Remove dangling containers
- stopped or killed containers remain in the system and can take up space or conflict new containers
- so to remove 
  - $ docker container rm <container identifier>
- to remove all dangling containers at one go
  - $ container prune

- to remove containers as soon as they are stooped use --rm
  - docker container run --rm --detach --publish 8888:80 --name hello-dock-volatile fhsinchy/hello-dock


##### How to Run a Container in Interactive Mode
- images can encapsulate entire linux distribution inside them
- e.g.  Ubuntu, Fedora, and Debian all have official Docker images available in the hub. python, php, node ahve their official images. 
- configured to run a shell by default 
- these images require (-it) - interactive(i -> interactive, t-> to give formatting experience) options passed in run command 

### How to work with executable images

- to grant a container direct access to your local file system is by using bind mounts
- A bind mount lets you form a two way data binding between the content of a local file system directory (source) and another directory inside a container (destination). 
- This way any changes made in the destination directory will take effect on the source directory and vise versa.

- generic syntax 
```bash
  --volume <local file system directory absolute path>:<container file system directory absolute path>:<read write access>
  
  $ docker container run --rm -v $(pwd):/zone fhsinchy/rmbyext pdf
```


## Docker Image Manipulation Basics

##### Creating own image 
- creating images, 
running containers using them, and 
sharing them online


- create docker image 
    - create docker file with instructions 
    - build image
        $ docker image build .
    - to run a container using this image
        $ docke container run --rm --detach --name custom-nginx --publish 8080:80 <image_id> // image id from previous build 


- tag docker image:
    -- tag <image repo >:<image tag>
- repo is known as image name and tag indicated build or version e.g mysql:5.7
- with tag you can refer image instead of long random string 

- list and remove docker images
- image ls 
- docker image rm <image identifier> 


#### Optimize Docker images

- in Dockerfile: unnecessary for running it uninstall once build process is done 
- splitting into multiple instructions would be mistake as they will live in separate layers of the image. 

#### Alpine linux:
- lightweight, secure full featured linux distribution 


#### Share image
- docker hub: sign up if no account 
- docker login 
- in order to share: image has to be tagged 
    docker image build --tag <username>/<image_name>:<image_tag>
```bash
    docker image build --tag fhsinchy/custom-nginx:latest --file Dockerfile.built .
```
- once image built. can upload by executing
```bash
    docker image push <image repository>:<image tag>
```


## Containerize a Javascript application 

- volume 
- multi staged builts 

#### How to run database server 

- to run postgres provide POSTGRES_PASSWORD env, POSTGRES_DB, 
- PostgreSQL uses the /var/lib/postgresql/data directory inside the container to persist data.
- assign volume to mount to postgres 
```bash
  docker container run \
    --detach \
    --volume notes-db-data:/var/lib/postgresql/data \
    --name=notes-db \
    --env POSTGRES_DB=notesdb \
    --env POSTGRES_PASSWORD=secret \
    --network=notes-api-network \
    postgres:12
```

### create a network and attach db server in docker 
- create network 
    docker network create notes-api-network
- attach notes-db container to the network
docker network connect notes-api-network notes-db


#### management script in docker 
- shell scripts and makefile 
- permission set up using chmod +x 


### Compose projects using docker compose 

- simplify to manage multiple container projects 
- more focused on development and testing 
- using compose not recommended to use on production

##### Docker compose basics 

- service:  each container that makes up the application is known as a service.
- Docker Compose uses a docker-compose.yaml file to read service definitions from.
- docker-compose.yaml starts with version 

##### start services in docker compose 
- make sure you've opened your terminal in the same directory where the docker-compose.yaml file is. 
    docker-compose --file docker-compose.yaml up --detach

- list services
    $ docker-compose ps

- stop services in docker compose 
    $ docker-compose down --volumes 


