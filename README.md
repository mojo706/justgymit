# Just Gym It
## API for gym membership management

# Setup
## Make sure you have `Node v ^8.10.0` and `postgres`

## Run the following commands to setup:

###  `git clone https://github.com/mojo706/justgymit.git`

###  `cd justgymit/`

## Make sure you change the `db` `config` details and enter the correct `db` user

###  `createdb JustGymIt`

###  `sequelize db:migrate`

###  `npm install` or `yarn`

# Running
## Run the following commands to run app:

###  `npm run start:dev` or `yarn start:dev`

# Endpoints
## The API exposes the following endpoints
### Add User Endpoint [POST]
### ``` localhost:5000/api/users ```  
Payload =  
{  
	"firstName": "Name",  
	"lastName": "Name",  
	"dateOfBirth": "Date"  
}

### Update User Endpoint [PUT]
### ``` localhost:5000/api/users/:userId ```  
Payload =  
{  
	"firstName": "Name",  
	"lastName": "Name",  
	"dateOfBirth": "Date"  
}

### Delete User Endpoint [DELETE]
### ``` localhost:5000/api/users/:userId ```  
No payload needed

### Add Plan Endpoint [POST]
### ``` localhost:5000/api/plans ```  
Payload =  
{  
	"name": "Name",  
	"type": "Recurrent"  
}

#### If type is time limited then you must provide a `startDate` and an `endDate`
Payload =  
{  
	"name": "Name",  
	"type": "time limited",  
  "startDate": "valid date",  
  "endDate": "valid date"
}

### Update Plan Endpoint [PUT]
### ``` localhost:5000/api/plans/:planId ```  
Payload =  
{  
	"name": "",  
	"type": ""  
}

#### If type is time limited then you must provide a `startDate` and an `endDate` when updating too
Payload =  
{  
	"name": "Name",  
	"type": "time limited",  
  "startDate": "valid date",  
  "endDate": "valid date"
}

### Delete Plan Endpoint [DELETE]
### ``` localhost:5000/api/plans/:planId ```  
No need for payload

### Add an exisiting member to a plan [PUT]
### ``` localhost:5000/api/plans/:planId/members/:memberId ```  
Payload =  none

### Remove an exisiting member from a plan [DELETE]
### ``` localhost:5000/api/plans/:planId/members/:memberId ```  
Payload =  none

### List all members in a plan [GET]
### ``` localhost:5000/api/plans/:planId/members/ ```  
Payload =  none

