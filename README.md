# apic-usermanagement
REST API of user management created with API Connect

Tutorial to create a REST API implemented with LoopBack in the IBM API Connect system.

	npm install -g apiconnect

	apic loopback

	  	? What's the name of your application? apic-usermanagement

	  	? Enter name of the directory to contain the project: (apic-usermanagement)

	  	? What kind of application do you have in mind?

	    	empty-server (An empty LoopBack API, without any configured models or datasources)

	  	(Runs npm install. It may take some time)


	cd apic-usermanagement

	apic edit (The API Designer opens at http://localhost:9000)

		* Create MongoDB data source, installing MongoDB connector (Equivalent to npm install --save loopback-connector-mongodb)

		* Create User model linked with mongo connector

		* Start the server (Run icon) (Equivalent to npm start)


With the API Designer is possible to compose the API, run, manage, enfore and deploy it with API Connect.

All the REST operations of the user collection are active now.

Loopback provides us a powerful GUI platform to test the routes and define documentation of the API

	npm install --save loopback-component-explorer

	npm start

	Go to http://localhost:3000/explorer

	Example of GET all users:
		http://localhost:3000/explorer/#!/user/user_find (it calls http://localhost:3000/api/users)


It's possible to create new operations, update or hide the existing ones, connect several models, etc. This can be done by code, defining the models in server/models/model.js and server/models/model.json.
Every route will be defined with remote methods (https://loopback.io/doc/en/lb3/Remote-methods.html)


A yaml file can be generated with all the information about the API in definitions/apic-usermanagement.yaml, with the following command:

	apic loopback:refresh





