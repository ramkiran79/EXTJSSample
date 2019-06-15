# Extjs Sample application



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

Step 4: install Node_module
To install Sencha Cmd globally
To add the sencha command to your system install this module globally:

$ npm install -g sencha-cmd
The sencha command should be available in your command prompt immediately after.

To use as a package dependency:
Install sencha-cmd with --save:

$ npm install --save sencha-cmd
You can then use the sencha command in your npm scripts.

Step 5: Create an Application
Then quickly create a barebones application with ext-gen.

ext-gen app -a - This generates an application called MyApp. Or Issue command as below to create ExtjsSampleApp project
ext-gen app ExtjsSampleApp
Or Download code from https://github.com/ramkiran79/EXTJSSample.git

Step 6: Start Application
type "cd extjs-sample-app" then "npm start" or "npm run desktop"
to run the development build and open your new application in a web browser

see the application running at
http://localhost:1962/
