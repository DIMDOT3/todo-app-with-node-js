# todo-app-with-node-js
A project To-Do App with Node.js, as part of the "Advanced Web Developer" course on Udemy by Colt Steele.  App uses MongoDB for data storage.
This project Employes

## Working Demo
Click [here]() to see a working demo of the app.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
You will need to have Node.js and MongoDB installed on your machine or IDE.  The quicker setup method would be through an IDE such as Cloud9.  If you want to use Cloud9, you can go here and [register](https://aws.amazon.com/cloud9/?origin=c9io).  Once registered, create a workspace with the Node.js template.

To install and get MongoDB up and running, enter the commands found in the file "commands.txt" into your terminal.  

```
<---- Fetch the MongoDb code ---->
>sudo apt-get install -y mongodb-org

<---- Create a directory to store Mongo files---->
>mkdir data

<---- Create path for MongoDb files ---->
****** "dbpath" below must match the directory created in line 2 ****
>echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod

<---- Run this Command ---->
>chmod a+x mongod
```

## Running the App

### Clone or download the directory to your workspace and installing dependencies.

Change to the directory "todos_api" in your terminal.  Make sure you install the dependecies found in the package.json file.  To do so, enter 'npm install'.

```
>cd todos_api
>npm install

```

### Starting up MongoDB
In the parent directory "todo_app_node", in a separate terminal window, run the "./mongod" command to initiate Mongo Demon process in the background.

```
>./mongod

```

### Start up app
Change into the "todo_api" directory and execute "node index.js" to start up the server.  Navigate to the local server url for app interface.

```
>node index.js

```

### Stopping the app
When you want to stop the app, you have to quit out of both the Mongo Demon and the App itself.  In each respective terminal, enter the following command:

```
>^c
```
That is the buttons "control" plus "c" on your keyboard.

