# Seems it's Todost 🖖

![Screenshot](screenshot.png)


## Up and running using Docker (Hot reloading enabled)
You can easily build and run using Docker:

```shell
$ docker build -t todost .
$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true --rm todost
 ```