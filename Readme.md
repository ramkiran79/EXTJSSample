# ExtjsSampleApp application# EXTJSSample



Getting Started with Ext JS Using Open Tooling
This guide will show you how to install and configure Ext JS framework using open tooling in your development environment.

Requirements
The Ext JS tooling requires NodeJS and Java.

Node 8.11+
NPM 6+
Java 8 & 11
Creating Your First Ext JS Application
Step 1: Sign Up
To gain access to the Sencha NPM repository.

Start a free trial of Ext JS.
Purchase Ext JS.
Step 2: Login to the NPM repository
Once you've signed up or purchased the product, start by logging into the repository with the @sencha scope.

npm login --registry=https://npm.sencha.com --scope=@sencha
Note: Existing customers use your support portal credentials. But switch the username, @ character with '..' two periods, so the username would look something like this after it's converted: name..gmail.com.

Step 3: Install the App Generator CLI
Then install the Ext JS app generator CLI command ext-gen. This will allow you to quickly create an Ext JS application.

npm install -g @sencha/ext-gen
Step 4: Create an Application
Then quickly create a barebones application with ext-gen.

ext-gen app -a - This generates an application called MyApp.
ext-gen app ExtjsSampleApp

type "cd extjs-sample-app" then "npm start" or "npm run desktop"
to run the development build and open your new application in a web browser

see the application running at
http://localhost:1962/
