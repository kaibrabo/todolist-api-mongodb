## Install MongoDB on C9.io in root directory

1. `sudo apt-get install -y mongodb-org`
2. `mkdir data`
3. `echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod`
4. `chmod a+x mongod`

## Starts Server:
`./mongod`

## Install Mongoose:
`npm install mongoose --save`

## Errors:

- THE PROBLEM - 

If you are getting this error message after running the command 'node index.js':
```
(node:6241) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): MongoNetworkError: failed to connect to server [localhost:NaN] on first connect [MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017]
```
- THE SOLUTION - 

1. Delete the data folder

2. Delete Mongod file

2.  Follow the 'Install MongoDB on C9' steps.

3. Make sure you're always running `./mongod` a separate terminal as suggested in the lesson "installing mongo".

4. Go back to your main terminal and run `node index.js` 

- THE END RESULT -

You should have a [ ] when you go into the api/todos  just like at the end of this video. 

